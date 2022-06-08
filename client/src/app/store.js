import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import searchReducer from './features/search/searchSlice'

const reducer = combineReducers({
    cart: cartReducer,
    search: searchReducer
})

const store = configureStore({
    reducer
})


export default store