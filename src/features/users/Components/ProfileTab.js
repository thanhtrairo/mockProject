import React, { useEffect, useState } from 'react'
import styles from "./index.module.css"
import clsx from 'clsx'
import { toast } from "react-toastify"
import Toast from "../../Components/Toast"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { ApiUsers } from '../../../api/Api'
import { userUpdateProfile } from '../slices/userSlice'
import Message from '../../Components/Error'

function ProfileTab() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState()

    const toastId = React.useRef(null)
    
    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000,
    }

    const dispatch = useDispatch()
    
    const userLogin = useSelector((state) => state.users.userLogin)

    useEffect(() => {
        if (userLogin) {
            setName(userLogin.name)
            setEmail(userLogin.email)
        }
    }, [userLogin])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Password does not match", Toastobjects)
            }
        }else if(!password.trim() || !email.trim() || !name.trim()) {
            setError("Please enter a name or email or password")
        } else {
            setError()
            const updaterUser = async (user) => {
                try {
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                    const {data} = await axios.put(`${ApiUsers}/${user.id}`, user, config)
                    localStorage.setItem("userLogin", JSON.stringify(data))
                    dispatch(userUpdateProfile(data))
                } catch (error) {
                    console.log(`error: ${error}`)
                }
            }
            updaterUser({id: userLogin.id, name, email, password})
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Profile Updated", Toastobjects)
            }
        }
    }
    return (
        <>
            <Toast />
            {error && <Message variant="alert-danger">{error}</Message>}
            <form className={clsx("row", styles.form_container)} onSubmit={submitHandler}>
                <div className="col-md-6">
                    <div className={styles.form}>
                        <label htmlFor="account-fn">UserName</label>
                        <input
                            className="form-control"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className={styles.form}>
                        <label htmlFor="account-email">E-mail Address</label>
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.form}>
                        <label htmlFor="account-pass">New Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.form}>
                        <label htmlFor="account-confirm-pass">Confirm Password</label>
                        <input
                            className="form-control"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </>
    )
}

export default ProfileTab