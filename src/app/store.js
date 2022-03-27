
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productSlice'
import selectProductReducer from "../features/products/selectProductSlice";
import cartReducer from '../features/carts/cartSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        selectProduct: selectProductReducer,
        carts: cartReducer
    }
})

export default store