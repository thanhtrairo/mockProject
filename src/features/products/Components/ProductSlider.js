
import axios from 'axios'
import clsx from 'clsx'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick/lib/slider'
import { ApiFavorites } from '../../../api/Api'
import { addCart } from '../../carts/cartSlice'
import Modal from '../../Components/modal/Modal'
import { addFavorite } from '../../Favorite/favoriteSlice'

import styles from '../index.module.scss'

function ProductSlider({ product }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const userLogin = useSelector(state => state.users.userLogin)

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [productType, setProductType] = useState([])

    useEffect(() => {
        const newArr = products.filter(pro => pro.brand === product.brand)
        setProductType(newArr)
    }, [Object.keys(product).length, products, product.brand])

    useEffect(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }, [product.id])

    const [compeleteCart, setCompeleteCart] = useState(false)
    const carts = useSelector(state => state.carts.cartItems)
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(carts))
    }, [carts])

    const handleAddCart = (product) => {
        setCompeleteCart(true)
        dispatch(addCart(
            {
                id: product.id,
                prices: product.prices,
                imageURL: product.imageURL,
                name: product.name
            }
        ))
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
                if (!productInFavorite && userLogin.id) {
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
        <div>
            {compeleteCart && <Modal>Sản phẩm đã được thêm vào giỏ</Modal>}
            {error ? <Modal>Chưa đăng nhập hoặc sản phẩm đã có trong yêu thích</Modal>
                : compeleteFavorite && <Modal>Sản phẩm đã được thêm vào yêu thích</Modal>}
            <div className={clsx(styles.productInvolve)}>
                <span>SẢN PHẨM LIÊN QUAN</span>
            </div>
            <Slider {...settings}>
                {productType.map(product => (
                    <div className={clsx(styles.productImage)} key={product.id}>
                        <div className={clsx(styles.image, 'mr-3')}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.imageURL} alt={product.name} />
                            </Link>
                            <div className={clsx(styles.icon)}>
                                <div className={clsx(styles.overlay)}>
                                    <button onClick={() => handleAddFavorite(product)}>
                                        <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' alt='love' />
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
                ))}
            </Slider>
        </div>
    )
}

export default memo(ProductSlider)