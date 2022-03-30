
import clsx from 'clsx'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick/lib/slider'
import { addCart } from '../../carts/cartSlice'
import Modal from '../../Components/modal/Modal'

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
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [productType, setProductType] = useState([])

    useEffect(() => {
        const newArr = products.filter(pro => pro.brand === product.brand)
        setProductType(newArr)
    }, [Object.keys(product).length, products.length])

    useEffect(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }, [product.id])

    const [compeleteCart, setCompeleteCart] = useState(false)
    const carts = useSelector(state => state.carts)
    localStorage.setItem("cartItems", JSON.stringify(carts))
    const handleAddCart = (product) => {
        setCompeleteCart(true)
        dispatch(addCart({ product }))
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            setCompeleteCart(false)
        }, 2000)

        return () => clearTimeout(timeId)
    }, [compeleteCart])

    return (
        <div>
            {compeleteCart && <Modal />}
            <div className={clsx(styles.productInvolve)}>
                <span>SẢN PHẨM LIÊN QUAN</span>
            </div>
            <Slider {...settings}>
                {productType.map(product => (
                    <div className={clsx(styles.productImage)} key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <div className={clsx(styles.image, 'mr-3')}>
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
                ))}
            </Slider>
        </div>
    )
}

export default memo(ProductSlider)