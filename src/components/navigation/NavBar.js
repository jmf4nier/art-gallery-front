import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="/shoppingCart">Cart</Link>
        </li>
        <li>
          <Link to="topics">Topics</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
