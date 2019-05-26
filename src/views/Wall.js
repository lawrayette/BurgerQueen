import React, { Component } from 'react'
import store from '../store'
import { Button, Fa } from 'mdbreact'
import data from '../data/products.json'
import NavbarApp from '../components/header'
import { withRouter } from 'react-router-dom'
import firebase from '../fire'
import Ticket from '../components/ticket'
import '../components/order.css'

class Wall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      breakfast: false,
      dinner: false,
      extra: false,
      client: null
    }
  }
  componentWillMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push('/login')
      }
    })
  }

  handleChangeName (e) {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  handleChangeBreakfast () {
    this.setState({ breakfast: true })
  }

  handleChangeDinner () {
    this.setState({ breakfast: false, dinner: true })
  }

  handleChangeExtra () {
    this.setState({ dinner: false, extra: true })
  }

  render () {
    let menu
    let button
    if (this.state.breakfast) {
      menu = data.breakfast.map((product, i) => {
        return (
          <Button className='breakfast-2' name={product.item} value={product.price} onClick={() => this.addToCart(product)}>{product.item}</Button>
        )
      })
    } else if (this.state.dinner) {
      button = <Button className='food' onClick={this.handleChangeExtra.bind(this)}>Extras</Button>
      menu = data.dinner.map((product, i) => {
        return (
          <Button className='dinner-button' key={i} name={product.item} value={product.price} onClick={()=> this.addToCart(product)}>{product.item}</Button>
        )
      })
    } else if (this.state.extra) {
      menu = data.extra.map((product, i) => {
        return (
          <Button className='food' key={i} name={product.item} value={product.price} onClick={()=> this.addToCart(product)}>{product.item}</Button>
        )
      })
    }
    return (
      <div>
        <NavbarApp />
        <section>
          <label id="exampleForm2">Nombre de cliente</label>
          <input type="text" id="exampleForm2" className="form-control col-8 mb-3 input-name" name="client" onChange={this.handleChangeName.bind(this)}></input>
          <Button className='breakfast' onClick={this.handleChangeBreakfast.bind(this)}></Button>
          <Button className='food-button' onClick={this.handleChangeDinner.bind(this)}></Button>
          { button }
          <section className="mt-4">
            { menu }
          </section>
        </section>
        <Ticket />
      </div>
    )
  }

  addToCart (product) {
    store.dispatch({
      type: "ADD_TO_ORDER",
      product
    })
  }
}

export default withRouter(Wall)
