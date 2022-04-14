import axios from 'axios'
import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ApiUsers } from '../../../api/Api'
import Message from '../../Components/Error'
import HeaderPath from '../../Components/HeaderPath'
import { userLogin, userRegister } from '../slices/userSlice'
import styles from "./index.module.css"

function Resgister() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState()

    const history = useHistory()
    const location = useLocation()

    const users = useSelector((state) => state.users.userList)
    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.users.userLogin)

    const redirect = location.search ? location.search.split("=")[1] : "/"

    useEffect(() => {
        if (userInfo.id) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        const userExist = users.find(user => user.email === email)
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const resgisterUser = async (name, email, password) => {
            try {
                const results = await axios.post(ApiUsers, { name, email, password }, config)
                dispatch(userRegister(results.data))
                dispatch(userLogin(results.data))
                history.push("/products")
            } catch (error) {
                console.log("Err: ", error)
            }
        }
        if (!userExist && name.trim() && password.trim() && email.trim()) {
            resgisterUser(name, email, password)
        }else {
            if (!name.trim() || !email.trim() || !password.trim()) {
                setError("Please enter a name or email or password")
            }else {
                setError("Email already exists")
            }
        }
    }
    return (
        <div>
            <HeaderPath>Đăng ký</HeaderPath>
            <div className={clsx("container", "d-flex", "flex-column", "justify-content-center", "align-items-center", styles.login_center)}>
                {error && <Message variant="alert-danger">{error}</Message>}
                <form
                    className={clsx(styles.Login, "col-md-8", "col-lg-4", "col-11")}
                    onSubmit={submitHandler}
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
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

                    <button type="submit">Register</button>
                    <p>
                        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                            I Have Account <strong>Login</strong>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Resgister