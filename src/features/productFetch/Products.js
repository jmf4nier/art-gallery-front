import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getProducts}  from './productSlice'
import ProductCards from './ProductCards'

function Products() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const items = useSelector((state) => state.list)

  return (
    <div>
      <ProductCards products={items}/>
    </div>
  )
}

export default Products
