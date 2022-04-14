import { createSlice } from "@reduxjs/toolkit";

const usersLocalStorage = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : []

const userInfoFromLocalStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : {}

const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList: usersLocalStorage,
        userLogin: userInfoFromLocalStorage,
        userRegister: {}
    },
    reducers: {
        getUsers: (state, action) => {
            return {
                ...state,
                userList: action.payload
            }
        },
        userLogin: (state, action) => {
            return {
                ...state,
                userLogin: action.payload
            }
        },
        userRegister: (state, action) => {
            return {
                ...state,
                userLogin: action.payload
            }
        },
        userLogout: (state) => {
            return {
                ...state,
                userLogin: {}
            }
        },
        userUpdateProfile: (state, action) => {
            return {
                ...state,
                userLogin: action.payload
            }
        }
    }
})

export const { getUsers, userLogin, userLogout, userRegister, userUpdateProfile } = userSlice.actions
export default userSlice.reducer