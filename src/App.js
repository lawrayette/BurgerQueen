import React, { Component } from 'react'
import fire from './fire'
import Login from './login'
import './App.css'
import RouterApp from './Router'

class LoginFb extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  authListener () {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }
  componentDidMount () {
    this.authListener()
  }
  render () {
    return (
      <div> {this.state.user ? (<RouterApp />) : (<Login />)}</div>
    )
  }
}

export default LoginFb
