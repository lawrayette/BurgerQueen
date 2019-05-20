import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login'
import Wall from './views/Wall'

class RouteApp extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/wall' component={Wall} />
      </BrowserRouter>
    )
  }
}

export default RouteApp
