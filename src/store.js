import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './features/items/itemSlice'

const store =  configureStore({
  reducer: itemReducer
})

export default store