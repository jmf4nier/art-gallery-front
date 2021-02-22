import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk('Products/getProducts', async () => {
  console.log('action')
    return fetch('http://localhost:5000/products')
    .then((rsp) => rsp.json())
    .then((response) => response)
})

const productSlice = createSlice({
  name: 'Products',
  initialState: {
    list: [],
    status: null,
  },

  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.list = payload
      state.status = 'failure'
    },
  },
})
export default productSlice.reducer
