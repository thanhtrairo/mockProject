
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productSlice'
import selectProductReducer from "../features/products/selectProductSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        selectProduct: selectProductReducer
    }
})

export default store