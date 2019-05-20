import React, { Component } from 'react'
import './ticket.css'

class Ticket extends Component {
  render () {
    return (
      <aside id='ticket'>
        <div id='order-2'>
          <h2> PEDIDO  </h2>
        </div>
        <div id='no-items'>
          <h2> SIN </h2>
        </div>
        <div id='button-ticket'>
          <button id='ticket2'>RECIBO</button>
        </div>
      </aside>
    )
  }
}

export default Ticket
