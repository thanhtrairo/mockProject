import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import moment from 'moment'
import axios from 'axios'
import { Link } from 'react-router-dom'

import styles from '../../users/Components/index.module.css'
import Message from '../../Components/Error'
import { ApiOrders } from '../../../api/Api'
import { getOrderDetail } from '../orderSlice'
import { useParams } from 'react-router-dom'
import HeaderPath from '../../Components/HeaderPath'

function OrderScreen() {

    const { orderDetail } = useSelector(state => state.orders)

    const { orderId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOrder = async (id) => {
            try {
                const { data } = await axios.get(`${ApiOrders}/${id}`)
                console.log(data)
                dispatch(getOrderDetail(data))
            } catch (error) {
                console.log(`error: ${error}`)
            }
        }
        fetchOrder(orderId)
    }, [])

    return (
        <>
            <HeaderPath>Chi tiết đơn hàng</HeaderPath>
            <div className="container mt-4">
                <div className={clsx("row", styles.order_detail)}>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className={clsx("alert-success", styles.order_box)}>
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Khách hàng</strong>
                                </h5>
                                <p>{orderDetail.name}</p>
                                <p>
                                    <a href={`mailto:${orderDetail.email}`}>
                                        {orderDetail.email}
                                    </a>
                                </p>
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
                                <p>Ngày đặt: {moment(orderDetail.bookingDate).calendar()}</p>
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
                                    Địa chỉ: {orderDetail.address}
                                </p>
                                <p>Điện thoại: {orderDetail.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={clsx("row", styles.order_products, "justify-content-between")}>
                    <div className="col-lg-8">
                        {orderDetail.orderItems?.length === 0 ? (
                            <Message variant="alert-info mt-5">
                                Your order is empty
                            </Message>
                        ) : (
                            <>
                                {orderDetail.orderItems?.map((item, index) => (
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
                                    <td>{orderDetail.itemPrice} đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Phí ship</strong>
                                    </td>
                                    <td>{orderDetail.shippingPrice} đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tổng tiền</strong>
                                    </td>
                                    <td>{orderDetail.total} đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderScreen