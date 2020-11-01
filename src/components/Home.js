import React, { useEffect, useState } from 'react'
import Album from './imageGallery/Album'
import Topics from './navigation/Topics'
import Dashboard from './cart/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

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
  }, []) //vital to stopping unwanted updates otherwise get runaway requests

  const [user, SetUser] = useState({})
  //need to remember to use the correct data-type for state placeholder to avoid errors
  const { first_name, last_name } = user

  return (
    <div>
      <h1>{first_name + ' ' + last_name}</h1>

      <Album />
    </div>
  )
}

export default Home
