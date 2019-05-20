import React, { Component } from 'react'
import LOGO from '../assets/LOGO.png'

class Logo extends Component {
  render () {
    return (
      <article id='log'>
        <img id='log-img' src={LOGO} alt='Logo' />
      </article>
    )
  }
}

export default Logo
