import React from 'react'
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
  
   const users = fetch('http://localhost:5000/users')
  .then(response => response.json())
  .then(data => data.map(user=>{
    return(user)
  }));
  
  return (
  <div>
    {console.log(users)}
    <h1>aRtGAllerY</h1>
    <Album/>
    
  </div>
)}

export default Home
