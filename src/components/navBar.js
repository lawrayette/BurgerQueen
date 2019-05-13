
import React from 'react'
import logo from '../assets/logosolo.png'
import '../components/navBar.css'

function Nav () {
  return (
    <>
      <div id='content'>
        <img src={logo} alt='Logo' />
      </div>
      <div id='user'>
        <p> Empleado:</p>
        <p>No. Empleado:</p>
      </div>
      <div id='order'>
        <p>No. Orden:</p>

      </div>
    </>
  )
}

export default Nav
