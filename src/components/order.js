import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../components/order.css'

class Menu extends Component {
  render () {
    return (
      <main id='menu'>
        <h2>Menú</h2>
        <button id='food' ><NavLink className='nav-menu_link' activeClassName='activate' exact to='/food'>.</NavLink></button>
        <button id='drinks'><NavLink className='nav-menu_link' activeClassName='activate' to='/drink'>.</NavLink></button>
        <button id='dish'><NavLink className='nav-menu_link' activeClassName='activate' to='/dish'>.</NavLink></button>
        <button id='extra'><NavLink className='nav-menu_link' activeClassName='activate' exact to='/extra'>.</NavLink></button>
      </main>
    )
  }
}

export default Menu
