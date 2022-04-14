
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productSlice'
import selectProductReducer from "../features/products/selectProductSlice";
import cartSlice from '../features/carts/cartSlice'
import userSlice from "../features/users/slices/userSlice";
import orderSlice from "../features/orders/orderSlice"
import favoriteSlice from "../features/Favorite/favoriteSlice";
import ThemeReducer from "../admin/redux/reducer/ThemeReducer";
import AppReducers from '../admin/redux/reducer/AppReducers'

const store = configureStore({
    reducer: {
        products: productsReducer,
        selectProduct: selectProductReducer,
        carts: cartSlice,
        users: userSlice,
        orders: orderSlice,
        favorites: favoriteSlice,
        ThemeReducer: ThemeReducer,
        AppReducers: AppReducers
    }
})

export default store