import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProduct: (state, action) => {
            return action.payload
        }
    }
})

export const { getProduct } = products.actions
export default products.reducer 