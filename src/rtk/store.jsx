import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Slices/ProductSlice'
import cartReducer from './Slices/CartSlice'

export const store = configureStore({
  reducer: {
    Products: productsReducer,
    Cart: cartReducer,
  },
})