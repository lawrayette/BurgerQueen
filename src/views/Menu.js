import React, { Component } from 'react'
import Ticket from '../components/ticket'
import Order from '../components/order'
import '../App.css'

class Wall extends Component {
  render () {
    return (
      <>
        <Ticket />
        <Order />
      </>
    )
  }
}

export default Wall
