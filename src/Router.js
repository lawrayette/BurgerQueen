import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-dom'
import Login from './login'
import Menu from './views/Menu'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
      <>
        <Route path='/' component={Login} />
        <Route path='/menu' component={Menu} />
      </>
      </BrowserRouter>
    )
  }
}

export default Router
