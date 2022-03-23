
import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";

import Api from '../../../api/Api'
import img from '../img/loading.gif'
import styles from '../index.module.scss'
import { removeSelectProduct, selectProduct } from '../selectProductSlice'
import ProductDetailFeedBack from './ProductDetailFeedBack'
import ProductSlider from './ProductSlider'

function ProductDetail() {

  const product = useSelector(state => state.selectProduct)
  const { name, brand, description, imageURL, category, prices } = product

  const { productId } = useParams()
  const dispatch = useDispatch()
  const fetchProductsDetail = async (id) => {
    try {
      const results = await axios.get(Api + `/${id}`)
      dispatch(selectProduct(results.data))
    } catch (error) {
      console.log('err:', error)
    }
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetail(productId)
    return () => {
      dispatch(removeSelectProduct())
    }
  }, [productId])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className={clsx(styles.ProductDetail, 'container')}>
        {Object.keys(product).length === 0 ? <img src={img} style={{ width: '10%' }} /> : <div className={clsx(styles.content, 'row')}>
          <div className={clsx(styles.image, 'col-5')}>
            <img src={imageURL} />
            <div className={clsx(styles.icon)}>
              <div className={clsx(styles.overlay)}>
                <button>
                  <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' />
                </button>
                <span className={clsx('btn', 'btn-dark')}>Yêu thích</span>
              </div>
            </div>
          </div>
          <div className={clsx(styles.buying, 'col-7')}>
            <div className={clsx(styles.text)}>
              <h5>{name}</h5>
              <h4 className={clsx('my-3')}>Thương hiệu: <span>{brand}</span> | Loại: <span>{category}</span></h4>
              <h2>{prices} đ</h2>
              <p>Tiêu đề: {description}</p>
              <h3 className={clsx('my-3')}><span>Số lượng:</span>
                <button className={clsx('btn', 'btn-white')}>-</button>
                <strong>1</strong>
                <button className={clsx('btn', 'btn-white')}>+</button>
              </h3>
            </div>
            <div className={clsx(styles.cart)}>
              <button className={clsx('btn', 'btn-dark')}>Thêm vào giỏ</button>
              <button className={clsx('btn', 'btn-white', 'mx-3')}>Mua ngay</button>
            </div>
          </div>
        </div>}
        <ProductDetailFeedBack />
        <ProductSlider product={product}/>
      </div>
    </div>
  )
}

export default ProductDetail