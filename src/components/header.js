import React, { Component } from 'react'
import Logo from '../assets/logosolo.png'
import '../components/navBar.css'
import { Navbar, NavbarBrand, NavbarNav, NavItem, Button } from 'mdbreact'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import firebase from 'firebase'

class NavbarApp extends Component {
  order () {
    this.props.history.push('/orders')
  }

  logout () {
    firebase.auth().signOut()
      .then(function () {
      })
      .catch(function () {
      })
    this.props.history.push('/login')
  }

  render () {
    return (
      <Router>
        <Navbar>
          <NavbarBrand onClick={this.order.bind(this)}>
            <img className='img-nav' src={Logo} alt='logo' />
          </NavbarBrand>
          <NavbarNav right>
            <NavItem>
              <Button className='button-logout' onClick={this.logout.bind(this)}>Cerrar caja</Button>
            </NavItem>
          </NavbarNav>
        </Navbar>
      </Router>
    )
  }
}

export default withRouter(NavbarApp)
