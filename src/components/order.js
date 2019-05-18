import React, { Component } from 'react'
import Ticket from './ticket'
import '../components/order.css'

class Menu extends Component {
  render () {
    return (
        <>
        <Ticket />
          <main id='menu'>
            <h2>Menú</h2>
            <button id ='food'></button>
            <button id ='drinks'></button>
            <button id='dish'></button>
            <button id='solo'></button>
          </main>

        </>

    )
  }
}

export default Menu
