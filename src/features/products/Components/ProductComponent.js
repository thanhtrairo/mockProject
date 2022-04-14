import clsx from 'clsx'
import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from '../index.module.scss'
import img from '../img/loading.gif'
import { addCart } from '../../carts/cartSlice'
import Modal from '../../Components/modal/Modal'
import axios from 'axios'
import { ApiFavorites } from '../../../api/Api'
import { addFavorite } from '../../Favorite/favoriteSlice'

function ProductComponent({ onSortFind }) {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [compeleteCart, setCompeleteCart] = useState(false)
    const carts = useSelector(state => state.carts.cartItems)
    const userLogin = useSelector(state => state.users.userLogin)
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(carts))
    }, [carts])

    const handleAddCart = (product) => {
        setCompeleteCart(true)
        dispatch(addCart({
            id: product.id,
            prices: product.prices,
            imageURL: product.imageURL,
            name: product.name
        }))
    }

    const [error, setError] = useState(false)
    const [compeleteFavorite, setCompeleteFavorite] = useState(false)
    const { favoriteItems } = useSelector(state => state.favorites)
    const handleAddFavorite = (product) => {

        const postFavorite = async (favorite) => {
            setCompeleteFavorite(true)
            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                const productInFavorite = favoriteItems.find(fav => fav.idProduct === favorite.idProduct)
                const productUserInFavorite = favoriteItems.find(fav => fav.idUser === favorite.idUser)
                
                if (!productInFavorite || !productUserInFavorite && userLogin.id) {
                    const { data } = await axios.post(ApiFavorites, favorite, config)
                    dispatch(addFavorite(data))
                } else {
                    setError(true)
                }
            } catch (error) {
                console.log("Err: ", error)
            }
        }
        postFavorite({
            idUser: userLogin.id,
            idProduct: product.id,
            imageURL: product.imageURL,
            prices: product.prices,
            name: product.name
        })
    }

    useEffect(() => {
        let timeId
        if (compeleteCart) {
            timeId = setTimeout(() => {
                setCompeleteCart(false)
            }, 2000)
        } else if (error || compeleteFavorite) {
            timeId = setTimeout(() => {
                setError(false)
                setCompeleteFavorite(false)
            }, 2000)
        }

        return () => clearTimeout(timeId)
    }, [compeleteCart, error, compeleteFavorite])

    return (
        <>
            {compeleteCart && <Modal>Sản phẩm đã được thêm vào giỏ</Modal>}
            {error ? <Modal>Chưa đăng nhập hoặc sản phẩm đã có trong yêu thích</Modal>
                : compeleteFavorite && <Modal>Sản phẩm đã được thêm vào yêu thích</Modal>}
            <div className='row'>
                {products.length === 0 ? <img src={img} style={{ width: '20%' }} alt="" />
                    : (onSortFind?.length > 0 ? onSortFind : products).map((product) => (
                        <div className={clsx('col-xl-3', 'col-md-4', 'col-6', 'mb-4')} key={product.id}>
                            <div className={clsx(styles.item, styles.productImage)}>
                                <div className={clsx(styles.image)}>
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.imageURL} alt={product.name} />
                                    </Link>
                                    <div className={clsx(styles.icon)}>
                                        <div className={clsx(styles.overlay)}>
                                            <button onClick={() => handleAddFavorite(product)}>
                                                <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' alt="" />
                                            </button>
                                            <span className={clsx('btn', 'btn-dark')}>Yêu thích</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(styles.productText)}>
                                    <p>{product.name}</p>
                                    <p>{product.prices} đ</p>
                                </div>
                                <div className={clsx(styles.cart)}>
                                    <button className={clsx('btn', 'btn-dark')} onClick={() => handleAddCart(product)}>Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default memo(ProductComponent)