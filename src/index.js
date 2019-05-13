import React, { Component } from 'react'
import './index.css'
import App from './App'
import Login from './components/login'
import { BrowserRouter, Route } from 'react-router-dom'

class RouteIndex extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='./' Component={App} />
        <Route path='./login' Component={Login} />
      </BrowserRouter>, document.getElementById('root')
    )
  }
}

export default RouteIndex
