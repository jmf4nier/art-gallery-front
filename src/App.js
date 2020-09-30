// loads the Topics component, which renders any further <Route>'s conditionally on the paths :id value.import React from "react";
import React from 'react'
import Home from './components/Home'
import Topics from './components/navigation/Topics'
import Navbar from './components/navigation/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import Dashboard from './components/cart/Dashboard'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/shoppingCart">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      <div>
        
      </div>
    </Router>
  )
}
