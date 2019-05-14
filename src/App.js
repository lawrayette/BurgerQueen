import React, { Component } from 'react'
import firebaseConfig from '../src/firebaseConf/firebaseConf'
import Login from '../src/views/login'
import './App.css'
import Menu from '../src/views/Menu'
import Router from './Router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }
}

export default App
