import { createSlice } from "@reduxjs/toolkit";

const orders = createSlice({
    name: 'orders',
    initialState: {
        orderList: [],
        orderDetail: {}
    },
    reducers: {
        getOrders: (state, action) => {
            return {
                ...state,
                orderList: action.payload
            }
        },
        createOrder: (state, action) => {
            return {
                ...state,
                orderList: [...state.orderList,action.payload]
            }
        },
        getOrderDetail: (state, action) => {
            return {
                ...state,
                orderDetail: action.payload
            }
        }
    }
})

export const { createOrder, getOrders, getOrderDetail } = orders.actions
export default orders.reducer