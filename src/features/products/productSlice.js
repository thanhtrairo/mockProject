import { createSlice } from "@reduxjs/toolkit";
const cartItemsFromLocalStorage = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : []
const products = createSlice({
    name: 'products',
    initialState: cartItemsFromLocalStorage,
    reducers: {
        getProduct: (state, action) => {
            return action.payload
        },
        updateProduct: (state, action) => {
            const newProduct = action.payload
            return state.map(product => product.id === newProduct.id ? newProduct : product)
        }
    }
})

export const { getProduct, updateProduct } = products.actions
export default products.reducer 