import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useHistory } from 'react-router-dom'
import styles from "./index.module.css"
import { ApiUsers } from "../../../api/Api"
import { getUsers, userLogin } from '../slices/userSlice'
import Message from '../../Components/Error'
import HeaderPath from '../../Components/HeaderPath'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState()

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.userList)

    const userInfo = useSelector(state => state.users.userLogin)

    const history = useHistory()
    const location = useLocation()

    const redirect = location.search ? location.search.split("=")[1] : "/"

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const results = await axios.get(ApiUsers)
                dispatch(getUsers(results.data))
                localStorage.setItem("users", JSON.stringify(results.data))
            } catch (error) {
                console.log("Err: ", error)
            }
        }
        fetchUsers()
    }, [dispatch])

    useEffect(() => {
        if (userInfo.id) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        const userExist = users.find(user => user.email === email && user.password === password)
        if (userExist) {
            const user = { ...userExist, createAT: new Date() }
            dispatch(userLogin(user))
            localStorage.setItem("userLogin", JSON.stringify(user))
        } else {
            setError("Email or Password incorrect")
        }
    }
    return (
        <div>
            <HeaderPath>Đăng nhập</HeaderPath>
            <div className={clsx("container", "d-flex", "flex-column", "justify-content-center", "align-items-center", styles.login_center)}>
                {error && <Message variant="alert-danger">{error}</Message>}
                <form
                    className={clsx(styles.Login, "col-md-8", "col-lg-4", "col-11")}
                    onSubmit={submitHandler}
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Đăng nhập</button>
                    <p>
                        <Link
                            to={redirect ? `/resgister?redirect=${redirect}` : "/resgister"}
                        >
                            Tạo tài khoản
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login