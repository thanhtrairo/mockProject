import clsx from 'clsx'
import React, { memo, useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from '../index.module.scss'
import img from '../img/loading.gif'
import {addCart} from '../../carts/cartSlice'
import Modal from '../../Components/modal/Modal'

function ProductComponent({ onSortFind }) {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [compeleteCart, setCompeleteCart] = useState(false)
    const carts = useSelector(state => state.carts)
    localStorage.setItem("cartItems", JSON.stringify(carts.cartItems))
    const handleAddCart = (product) => {
        setCompeleteCart(true)
        dispatch(addCart({product}))
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            setCompeleteCart(false)
        },2000)

        return () => clearTimeout(timeId)
    }, [compeleteCart])

    return (
        <div className={clsx(styles.productList, '')}>
            {compeleteCart && <Modal />}
            <div className={clsx('row')}>
                {products.length === 0 ? <img src={img} style={{ width: '20%' }} /> 
                : (onSortFind?.length > 0 ? onSortFind : products).map((product) => (
                    <div className={clsx('col-xl-3', 'col-md-4','col-6', 'mb-4')} key={product.id}>
                        <div className={clsx(styles.item, styles.productImage)}>
                            <Link to={`/products/${product.id}`}>
                                <div className={clsx(styles.image)}>
                                    <img src={product.imageURL} />
                                    <div className={clsx(styles.icon)}>
                                        <div className={clsx(styles.overlay)}>
                                            <button>
                                                <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' />
                                            </button>
                                            <span className={clsx('btn', 'btn-dark')}>Yêu thích</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
        </div>
    )
}

export default memo(ProductComponent)