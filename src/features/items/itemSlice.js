import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getItems = createAsyncThunk('items/getItems', ( )  => {
  fetch('http://localhost:5000/products')
    .then((response) => response.json())
})

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    list: [],
    status: null
  },
  reducers: {

  },
  extraReducers: {
    [getItems.pending]: (state, action) =>{
      state.status = 'loading'
    },
    [getItems.fullfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
    },
    [getItems.rejected]: (state, {payload}) => {
      state.list = payload
      state.status = 'failure'
    }
  }
})
export default itemSlice.reducer