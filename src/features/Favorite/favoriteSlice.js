import { createSlice } from "@reduxjs/toolkit";

const FavoritesFromLocalStorage = localStorage.getItem("Favorites")
    ? JSON.parse(localStorage.getItem("Favorites"))
    : []

const favorites = createSlice({
    name: 'favorites',
    initialState: {
        favoriteItems: FavoritesFromLocalStorage
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteItems.push(action.payload)
        },
        removeFavorite: (state, action) => {
            const favoriteRemove = state.favoriteItems.find(obj => obj.id === action.payload)
            state.favoriteItems.splice(favoriteRemove, 1)
        },
        getFavorites: (state, action) => {
            state.favoriteItems = action.payload
        }
    }
})

export const { addFavorite, removeFavorite, getFavorites } = favorites.actions
export default favorites.reducer