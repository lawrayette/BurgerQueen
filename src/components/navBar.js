import React, { Component } from 'react'
import logo from '../assets/logosolo.png'
import '../components/navBar.css'

class Header extends Component {
  render () {
    return (
      <header className='col s12 m12 l12'>
        <figure id='box'>
          <img src={logo} alt='Logo' />
        </figure>
        <div id='user'>
          <p>No. Empleado:</p>
        </div>
        <div id='order'>
          <p>No. Orden:</p>
        </div>
      </header>
    )
  }
}

export default Header
