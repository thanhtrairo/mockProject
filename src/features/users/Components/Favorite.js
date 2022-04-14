
import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import styles from '../../products/index.module.scss'
import { removeFavorite } from '../../Favorite/favoriteSlice'
import { addCart } from '../../carts/cartSlice'
import Modal from '../../Components/modal/Modal'
import axios from 'axios'
import { ApiFavorites } from '../../../api/Api'

function Favorite({ favorites }) {
  const dispatch = useDispatch()

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

  const handleRemoveLove = (id) => {
    console.log(id)
    const deleteFavorite = async (id) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        }
        dispatch(removeFavorite(id))
        await axios.delete(`${ApiFavorites}/${id}`, config)
      } catch (error) {
        console.log("Err: ", error)
      }
    }
    deleteFavorite(id)
  }

  useEffect(() => {

    const timeId = setTimeout(() => {
      setCompeleteCart(false)
    }, 2000)

    return () => clearTimeout(timeId)
  }, [compeleteCart])

  return (
    <>
      {compeleteCart && <Modal>Sản phẩm đã chuyển vào giỏ</Modal>}
      <div className='row mx-0'>
        {favorites.length === 0 ? (
          <div className="col-12 alert alert-info text-center mt-3">
            Không có yêu thích nào
            <Link
              className="btn btn-dark mx-2 px-3 py-2"
              to="/products"
              style={{
                fontSize: "12px",
              }}
            >
              Thêm yêu thích
            </Link>
          </div>
        ) : (
          favorites.map(favorite => (
            <div className={clsx('col-xl-3', 'col-md-4', 'col-6', 'mb-4')} key={favorite.id}>
              <div className={clsx(styles.productImage)}>
                <div className={clsx(styles.item, styles.image, 'mr-3')}>
                  <Link to={`/products/${favorite.idProduct}`}>
                    <img src={favorite.imageURL} alt={favorite.name} />
                  </Link>
                  <div className={clsx(styles.icon)}>
                    <div className={clsx(styles.overlay)}>
                      <button onClick={() => handleRemoveLove(favorite.id)}>
                        <i className="fa fa-trash-alt"></i>
                      </button>
                      <span className={clsx('btn', 'btn-dark')}>Xóa yêu thích</span>
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.productText)}>
                  <p>{favorite.name}</p>
                  <p>{favorite.prices} đ</p>
                </div>
                <div className={clsx(styles.cart)}>
                  <button className={clsx('btn', 'btn-dark')} onClick={() => handleAddCart(favorite)}>Chuyển vào giỏ</button>
                </div>
              </div>
            </div>
          )))}
      </div>
    </>
  )
}

export default memo(Favorite)