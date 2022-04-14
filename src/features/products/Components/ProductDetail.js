
import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { ApiFavorites, ApiProducts } from '../../../api/Api'
import { addCart } from '../../carts/cartSlice'
import HeaderPath from '../../Components/HeaderPath'
import Modal from '../../Components/modal/Modal'
import { addFavorite } from '../../Favorite/favoriteSlice'
import img from '../img/loading.gif'
import styles from '../index.module.scss'
import { removeSelectProduct, selectProduct } from '../selectProductSlice'
import ProductDetailFeedBack from './ProductDetailFeedBack'
import ProductSlider from './ProductSlider'

function ProductDetail() {

  const product = useSelector(state => state.selectProduct)
  const userLogin = useSelector(state => state.users.userLogin)
  const { name, brand, description, imageURL, category, prices } = product

  const { productId } = useParams()
  const dispatch = useDispatch()
  const fetchProductsDetail = async (id) => {
    try {
      const results = await axios.get(ApiProducts + `/${id}`)
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
  }, [dispatch, productId])

  const [quatity, setQuatity] = useState(1)

  const handleDownQuatity = () => {
    if (quatity <= 1) return

    setQuatity(quatity - 1)
  }

  const handleUpQuatity = () => {
    setQuatity(quatity + 1)
  }

  const [compeleteCart, setCompeleteCart] = useState(false)
  const carts = useSelector(state => state.carts.cartItems)
  localStorage.setItem("cartItems", JSON.stringify(carts))
  const handleAddCart = (product, quatity) => {
    setCompeleteCart(true)
    dispatch(addCart({
      id: product.id,
      prices: product.prices,
      imageURL: product.imageURL,
      name: product.name,
      quatity
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
      <HeaderPath>Chi tiết sản phẩm sản phẩm</HeaderPath>
      {compeleteCart && <Modal>Sản phẩm đã được thêm vào giỏ</Modal>}
      {error ? <Modal>Chưa đăng nhập hoặc sản phẩm đã có trong yêu thích</Modal>
        : compeleteFavorite && <Modal>Sản phẩm đã được thêm vào yêu thích</Modal>}
      <div className={clsx(styles.ProductDetail, 'container', 'mt-3')}>
        {Object.keys(product).length === 0 ? <img src={img} style={{ width: '10%' }} /> : <div className={clsx(styles.content, 'row')}>
          <div className={clsx(styles.image, 'col-5')}>
            <img src={imageURL} alt={name} />
            <div className={clsx(styles.icon)}>
              <div className={clsx(styles.overlay)}>
                <button onClick={() => handleAddFavorite(product)}>
                  <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' alt="" />
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
              <button className={clsx('btn', 'btn-dark', 'mr-3')} onClick={() => handleAddCart(product, quatity)}
              >
                Thêm vào giỏ
              </button>
              <Link to='/carts'>
                <button className={clsx('btn', 'btn-white')} onClick={() => dispatch(addCart({
                  id: product.id,
                  prices: product.prices,
                  imageURL: product.imageURL,
                  name: product.name,
                  quatity
                }))}>Mua ngay</button>
              </Link>
            </div>
          </div>
        </div>}
        <ProductDetailFeedBack product={product} />
        <ProductSlider product={product} />
      </div>
    </div>
  )
}

export default ProductDetail