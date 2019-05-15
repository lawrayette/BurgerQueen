import React, { Component } from 'react'
import fire from './fire'
import Login from './login'
import Router from './Router'

class App extends Component {
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
      <div> {this.state.user ? (<Router />) : (<Login />)}</div>
    )
  }
}

export default App
