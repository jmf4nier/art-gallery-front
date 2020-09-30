import React from 'react';
import Topic from './Topic'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'


const Topics = () => {
  let match = useRouteMatch()
  console.log(match.url)
  console.log(match.path)

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/22`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/33`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. The Path ID is dynamically assigned by the link using x/:topicId where 
          x is current url and topicId is whatever comes after the /  */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}
export default Topics