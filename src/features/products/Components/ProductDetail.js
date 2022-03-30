
import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Api from '../../../api/Api'
import { addCart } from '../../carts/cartSlice'
import Modal from '../../Components/modal/Modal'
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
  }, [dispatch, productId ])

  const [quatity, setQuatity] = useState(1)

  const handleDownQuatity = () => {
    if (quatity <= 1) return

    setQuatity(quatity - 1)
  }

  const handleUpQuatity = () => {
    setQuatity(quatity + 1)
  }

  const [compeleteCart, setCompeleteCart] = useState(false)
  const carts = useSelector(state => state.carts)
  localStorage.setItem("cartItems", JSON.stringify(carts))
  const handleAddCart = (product) => {
    setCompeleteCart(true)
    dispatch(addCart({ product, quatity }))
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
              <h4>Tiêu đề: <span>{description}</span></h4>
              <h3 className={clsx('my-3')}><span>Số lượng:</span>
                <button className={clsx('btn', 'btn-white')} onClick={handleDownQuatity}>-</button>
                <strong>{quatity}</strong>
                <button className={clsx('btn', 'btn-white')} onClick={handleUpQuatity}>+</button>
              </h3>
            </div>
            <div className={clsx(styles.cart)}>
              <button className={clsx('btn', 'btn-dark', 'mr-3')} onClick={() => handleAddCart(product)}>Thêm vào giỏ</button>
              <Link to='/carts'>
                <button className={clsx('btn', 'btn-white')} onClick={() => dispatch(addCart({ product }))}>Mua ngay</button>
              </Link>
            </div>
          </div>
        </div>}
        <ProductDetailFeedBack />
        <ProductSlider product={product} />
      </div>
    </div>
  )
}

export default ProductDetail