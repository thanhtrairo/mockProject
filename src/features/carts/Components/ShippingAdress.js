import React, { useState } from 'react'
import clsx from 'clsx'
import styles from '../../users/Components/index.module.css'
import { saveShippingAddress } from '../cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function ShippingAdress() {

    const shippingAdress = useSelector(state => state.carts.shippingAdress)
    const [address, setAddress] = useState(shippingAdress.address)
    const [phone, setPhone] = useState(shippingAdress.phone)

    const history = useHistory()
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("shippingAdress", JSON.stringify({address, phone}))
        dispatch(saveShippingAddress({address, phone}))
        history.push("/placeOrderScreen")
    }
    return (
        <>
            <div className={clsx("container", "d-flex", "justify-content-center", "align-items-center", styles.login_center)}>
                <form
                    className={clsx(styles.Login, "col-md-8", "col-lg-4", "col-11")}
                    onSubmit={submitHandler}
                >
                    <h6>DELIVERY ADDRESS</h6>
                    <input
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Enter phone"
                        pattern="^\+?[0-9]{3}-?[0-9]{6,12}$"
                        maxLength="11"
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">Continue</button>
                </form>
            </div>
        </>
    )
}

export default ShippingAdress