import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'

class RouterHome extends Component {
  render () {
    return (
      <Router>
        <div>
          <h1>tringapps</h1>
          <ul>
            <li> <Link to={'/'}>Home</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </div>
      </Router>
    ) 
  }
}
export default RouterHome
