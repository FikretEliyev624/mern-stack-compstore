import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addToCart(state, { payload }) {
            return {
                ...state,
                products: state.products.find(product => product._id === payload._id) 
                            ? state.products.map(product => product._id === payload._id ? ({ ...product, count: +product.count + 1 }) : product)
                            : state.products.concat({ ...payload, count: 1 })
            }
        },
        deleteFromCart(state, { payload }) {
            return {
                ...state,
                products: state.products.filter(p => p._id !== payload?._id)
            }
        },
        changeProductCount(state, { payload }) {
            return {
                ...state,
                products: state.products.map(product => product._id === payload._id ? ({ ...product, count: payload.count }) : product)
            }
        },
        removeAll(state) {
            return {
                ...state,
                products: []
            }
        }
    }
})


export const { addToCart, deleteFromCart, changeProductCount, removeAll } = cartSlice.actions

export default cartSlice.reducer