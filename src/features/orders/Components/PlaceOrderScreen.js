import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import moment from 'moment'

import styles from '../../users/Components/index.module.css'
import Message from '../../Components/Error'
import { Link } from 'react-router-dom'
import { createOrder } from '../orderSlice'
import { ApiOrders } from '../../../api/Api'
import axios from 'axios'
import Modal from '../../Components/modal/Modal'
import HeaderPath from '../../Components/HeaderPath'

function PlaceOrderScreen() {

    const orderList = useSelector(state => state.orders.orderList)

    const userLogin = useSelector(state => state.users.userLogin)
    const carts = useSelector(state => state.carts)

    const totalCart = useMemo(() => {
        const results = carts.cartItems.reduce((acc, cur) => {
            return acc + cur.quatity * cur.prices
        }, 0)

        return results
    }, [carts.cartItems])

    const newCarts = { ...carts }
    newCarts.shipping = useMemo(() => {
        if (totalCart > 300000) return 0
        return 20000
    }, [newCarts.cartItems.prices])

    const total = totalCart + newCarts?.shipping

    const dispatch = useDispatch()

    const [compeleteOrder, setCompeleteOrder] = useState(false)

    const OrderHandler = () => {

        setCompeleteOrder(true)

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const postOrder = async (order) => {
            try {
                const { data } = await axios.post(ApiOrders, order, config)
                dispatch(createOrder(data))
            } catch (error) {
                console.log("Err: ", error)
            }
        }
        postOrder({
            idUser: userLogin.id,
            bookingDate: new Date(),
            deliveryDate: null,
            address: carts.shippingAdress.address,
            orderItems: carts.cartItems,
            itemPrice: totalCart,
            total: total,
            phone: carts.shippingAdress.phone,
            name: userLogin.name,
            email: userLogin.email,
            shippingPrice: newCarts.shipping
        })
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            setCompeleteOrder(false)
        }, 2000)

        return () => clearTimeout(timeId)
    }, [compeleteOrder])
    
    return (
        <>
            {compeleteOrder && <Modal>Đặt hàng thành công</Modal>}
            <HeaderPath>Đặt hàng</HeaderPath>
            <div className="container mt-4">
                <div className={clsx("row", styles.order_detail)}>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row ">
                            <div className="col-md-4 center">
                                <div className={clsx("alert-success", styles.order_box)}>
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Khách hàng</strong>
                                </h5>
                                <p>Tên: {userLogin.name}</p>
                                <p>Email: {userLogin.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className={clsx("alert-success", styles.order_box)}>
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Thông tin đặt hàng</strong>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className={clsx("alert-success", styles.order_box)}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Giao cho</strong>
                                </h5>
                                <p>
                                    Địa chỉ: {carts.shippingAdress.address}
                                </p>
                                <p>Điện thoại: {carts.shippingAdress.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={clsx("row", styles.order_products, "justify-content-between")}>
                    <div className="col-12 col-lg-8">
                        {carts.cartItems.length === 0 ? (
                            <Message variant="alert-info mt-5">Giỏ hàng trống</Message>
                        ) : (
                            <>
                                {carts.cartItems.map((item, index) => (
                                    <div className={clsx(styles.order_product, "row")} key={index}>
                                        <div className="col-md-3 col-6">
                                            <img src={item.imageURL} alt={item.name} />
                                        </div>
                                        <div className="col-md-3 col-6 d-flex align-items-center">
                                            <Link to={`/products/${item.id}`}>
                                                <h6>{item.name}</h6>
                                            </Link>
                                        </div>
                                        <div className="mt-3 mt-md-0 col-md-3 col-6  d-flex align-items-center flex-column justify-content-center ">
                                            <h4>Số lượng</h4>
                                            <h6>{item.quatity}</h6>
                                        </div>
                                        <div className="mt-3 mt-md-0 col-md-3 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                            <h4>Tổng tiền</h4>
                                            <h6>{item.quatity * item.prices} đ</h6>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    {/* total */}
                    <div className={clsx("col-6", "ml-lg-0", "col-lg-3", "d-flex", "align-items-end", "flex-column mt-5", styles.subtotal_order)}>
                        <table className={clsx("table", styles.table_bordered)}>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Giá</strong>
                                    </td>
                                    <td>{totalCart} đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Phí ship</strong>
                                    </td>
                                    <td>{newCarts.shipping || 0} đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tổng tiền</strong>
                                    </td>
                                    <td>{totalCart + (newCarts.shipping || 0)} đ</td>
                                </tr>
                            </tbody>
                        </table>
                        {carts.cartItems.length === 0 ? null : (
                            <button type="submit" onClick={OrderHandler}>
                                Đặt hàng
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceOrderScreen