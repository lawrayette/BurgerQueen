import React, { Component } from 'react'
import Ticket from '../components/ticket'
import Order from '../components/order'
import Header from '../components/navBar'
// import Fire from '../fire'

class Wall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount () {
    fetch('https://burgerqueenmx.firebaseio.com/products.json')
      .then(response => response.json())
    // if hamburger - muestrame sòlo ese pedazo del json
      .then((findresponse) => {
        console.log(findresponse)
        this.setState({
          isLoaded: true,
          items: findresponse
        })
      })
  }

  render () {
    var { isLoaded } = this.state
    if (!isLoaded) {
      return <div>Cargando...</div>
    }

    return (
      <>
        <Header />
        <Ticket />
        <Order />
     </>
    )
  }
}

export default Wall
