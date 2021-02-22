import React, { useEffect, useState } from 'react'
import Products from '../features/productFetch/Products'
import Copyright from './materialComponents/Copyright'
import Footer from './materialComponents/Footer'
import Header from './materialComponents/Header'
import MenuBar from './materialComponents/MenuBar'

const Home = () => {
  const fetchUser = () => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) =>
        data.map((user) => {
          SetUser(user)
        })
      )
  }
  useEffect(() => {
    fetchUser()
  }, []) 

  const [user, SetUser] = useState({})
  //need to remember to use the correct data-type for state placeholder to avoid errors
  const { first_name, last_name } = user

  return (
    <div>
      <h1>{first_name + ' ' + last_name}</h1>
      {/* <MenuBar /> */}
      <Header/>
      <Products />
      <Footer/>
    </div>
  )
}

export default Home
