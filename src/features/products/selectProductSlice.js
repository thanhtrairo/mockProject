
import { createSlice } from "@reduxjs/toolkit";

const selectProducts = createSlice({
    name: 'selectProducts',
    initialState: {},
    reducers: {
        selectProduct: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        removeSelectProduct: () => {
            return {}
        }
    }
})

export const {selectProduct, removeSelectProduct} = selectProducts.actions
export default selectProducts.reducer