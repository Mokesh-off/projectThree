import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import About from './About.jsx'
// import NotFound from './NotFound.jsx'

class RouterTest extends Component {
  render () {
    return (
      <Router>
        <div>
          <h1>new</h1>
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
            <li><Link to={'/About'}>About</Link></li>
          </ul>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/Login' component={Login} />
            <Route path='/about' component={About} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
export default RouterTest
