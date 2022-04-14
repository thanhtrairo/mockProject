import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAdress")
    ? JSON.parse(localStorage.getItem("shippingAdress"))
    : {}

const carts = createSlice({
    name: 'carts',
    initialState: {
        cartItems: cartItemsFromLocalStorage,
        shippingAdress: shippingAddressFromLocalStorage
    },
    reducers: {
        addCart: (state, action) => {
            const productInCart = state.cartItems.find(cart => cart.id === action.payload.id)
            if (!productInCart) {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        {
                            ...action.payload,
                            quatity: action.payload.quatity ? action.payload.quatity : 1
                        }
                    ]
                }
            } else {
                let ObjIndex = state.cartItems.findIndex(obj => obj.id === action.payload.id)
                if (!state.cartItems[ObjIndex].quatity) {
                    state.cartItems[ObjIndex].quatity = 2
                } else {
                    state.cartItems[ObjIndex].quatity = state.cartItems[ObjIndex].quatity + 1
                }
                return state
            }
        },
        removeCart: (state, action) => {
            const cartRemove = state.cartItems.find(obj => obj.id === action.payload.id)
            state.cartItems.splice(cartRemove, 1)
        },
        setUpQuatity: (state, action) => {
            let ObjIndex = state.cartItems.findIndex(obj => obj.id === action.payload.id)
            state.cartItems[ObjIndex].quatity ++
            return state
        },
        setDownQuatity: (state, action) => {
            let ObjIndex = state.cartItems.findIndex(obj => obj.id === action.payload.id)
            if (state.cartItems[ObjIndex].quatity <= 1) return
            state.cartItems[ObjIndex].quatity --
            return state
        },
        saveShippingAddress: (state, action) => {
            return {
                ...state,
                shippingAdress: action.payload
            }
        },
        removeCarts: () => {
            return {
                cartItems: [],
                shippingAdress: {}
            }
        }
    }
})

export const { addCart, setUpQuatity, setDownQuatity, removeCart, saveShippingAddress, removeCarts } = carts.actions
export default carts.reducer 