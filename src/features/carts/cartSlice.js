import { createSlice } from "@reduxjs/toolkit";

const carts = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            const productInCart = state.find(cart => cart.id === action.payload.product.id)
            if (!productInCart) {
                return [
                    ...state,
                    {
                        ...action.payload.product,
                        quatity: action.payload.quatity ? action.payload.quatity : 1
                    }
                ]
            } else {
                let ObjIndex = state.findIndex(obj => obj.id === action.payload.product.id)
                if (!state[ObjIndex].quatity) {
                    state[ObjIndex].quatity = 2
                } else {
                    state[ObjIndex].quatity = state[ObjIndex].quatity + 1
                }
                return state
            }
        },
        removeCart: (state, action) => {
            const cartRemove = state.find(obj => obj.id === action.payload.id)
            state.splice(cartRemove, 1)
        },
        setUpQuatity: (state, action) => {
            let ObjIndex = state.findIndex(obj => obj.id === action.payload.id)
            state[ObjIndex].quatity ++
            return state
        },
        setDownQuatity: (state, action) => {
            let ObjIndex = state.findIndex(obj => obj.id === action.payload.id)
            if (state[ObjIndex].quatity <= 1) return
            state[ObjIndex].quatity --
            return state
        },
    }
})

export const { addCart, setUpQuatity, setDownQuatity, removeCart } = carts.actions
export default carts.reducer 