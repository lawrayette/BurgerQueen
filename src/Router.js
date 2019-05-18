import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './login'
import Menu from './views/Menu'

class RouteApp extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
        <Route path='/menu' component={Menu} />
      </BrowserRouter>
    )
  }
}

export default RouteApp
