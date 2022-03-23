import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProduct: (state, action) => {
            return [
                ...state,
                ...action.payload
            ]
        },
        removeProduct: () => {
            return []
        }
    }
})

export const {getProduct, removeProduct} = products.actions
export default products.reducer 