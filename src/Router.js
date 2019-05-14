import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './views/Menu'

class RouterApp extends Component {
  render () {
    return(
      <BrowserRouter>
        <div className='App'>
          <Route path='./Menu' component={Menu} />
        </div>
      </BrowserRouter>
    )
  }
}

export default RouterApp
