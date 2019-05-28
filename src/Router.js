import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login'
import Wall from './views/Wall'
import Kitchen from './components/kitchen'

class RouteApp extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/wall' exact component={Wall} />
        <Route path='/orders' exact component={Kitchen} />
      </BrowserRouter>
    )
  }
}

export default RouteApp
