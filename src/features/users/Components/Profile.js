import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import clsx from 'clsx'
import styles from "./index.module.css"
import ProfileTab from "./ProfileTab"
import img from "../img/user.png"
import Orders from './Orders'
import axios from 'axios'
import { ApiOrders, ApiFavorites } from '../../../api/Api'
import { getOrders } from '../../orders/orderSlice'
import HeaderPath from '../../Components/HeaderPath'
import Favorite from './Favorite'
import { getFavorites } from '../../Favorite/favoriteSlice'

function Profile() {

  const userLogin = useSelector(state => state.users.userLogin)
  const { name, createdAt, id } = userLogin

  const orders = useSelector(state => state.orders.orderList)
  const favorites = useSelector(state => state.favorites.favoriteItems)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchOrders = async () => {
      const requesOrders = axios.get(ApiOrders)
      const requesFavorites = axios.get(ApiFavorites)
      axios.all([requesOrders, requesFavorites]).then(axios.spread((...res) => {
        const resOrders = res[0]
        const resFavorites = res[1]
        dispatch(getOrders(resOrders.data))
        dispatch(getFavorites(resFavorites.data))
      })).catch(error => {
        console.log(`error: ${error}`)
      })
    }
    fetchOrders()
  }, [dispatch])

  const ordersUser = orders.length > 0 ? orders.filter(order => order.idUser === id) : []
  const favaoritesUser = favorites.length > 0 ? favorites.filter(favorite => favorite.idUser === id) : []

  return (
    <>
      <HeaderPath>Hồ sơ</HeaderPath>
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div className="col-lg-4 p-0 shadow ">
            <div className={clsx(styles.author_card, "pb-0", "pb-md-3")}>
              <div className={clsx(styles.author_card_cover)}></div>
              <div className={clsx(styles.author_card_profile, "d-flex", "align-items-center", "justify-content-center")}>
                <div className={clsx(styles.author_card_avatar)}>
                  <img src={img} alt="userprofileimage" />
                </div>
                <div className={clsx(styles.author_card_details)}>
                  <h5 className={clsx(styles.author_card_name, "mb-2")}>
                    <strong>{name}</strong>
                  </h5>
                  <span className={clsx(styles.author_card_position)}>
                    <>Đăng nhập vào {moment(createdAt).calendar()}</>
                  </span>
                </div>
              </div>
            </div>
            <div className={clsx(styles.wizard, "pt-3 ")}>
              <div className="d-flex align-items-start">
                <div
                  className={clsx(styles.nav_link, "nav align-items-start flex-column col-12 nav-pills me-3")}
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Cài đặt hồ sơ
                  </button>
                  <button
                    className="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Đơn hàng
                    <span className={styles.badge2}>{ordersUser ? ordersUser.length : 0}</span>
                  </button>
                  <button
                    className="nav-link d-flex justify-content-between"
                    id="v-pills-love-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-love"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-love"
                    aria-selected="false"
                  >
                    Danh sách yêu thích
                    <span className={styles.badge2}>{favaoritesUser ? favaoritesUser.length : 0}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* panels */}
          <div
            className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProfileTab />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <Orders orders={ordersUser} />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-love"
              role="tabpanel"
              aria-labelledby="v-pills-love-tab"
            >
              <Favorite favorites={favaoritesUser}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile