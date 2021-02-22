import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productFetch/productSlice'

const store =  configureStore({
  reducer: productsReducer
})

export default store