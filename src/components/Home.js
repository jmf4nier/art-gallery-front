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
  return (
  <div>
    <h1>aRtGAllerY</h1>
    <Album/>
    
  </div>
)}

export default Home
