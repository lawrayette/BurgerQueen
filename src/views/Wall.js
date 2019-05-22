import React, { Component } from 'react'
import store from '../store'
import { Button, Fa } from 'mdbreact'
import data from '../data/products.json'
import NavbarApp from '../components/header'
import { withRouter } from 'react-router-dom'
import firebase from '../fire'
import Ticket from '../components/ticket'

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
          <Button name={product.nombre} value={product.precio} onClick={() => this.addToCart(product)}><Fa icon={product.icon} size="3x md" className="m-1"/><br/>{product.nombre}</Button>
        )
      })
  } else if (this.state.dinner){
          button = <Button className="rounded" size="lg" color="amber lighten-5" onClick={this.handleChangeExtra.bind(this)}>Extra</Button>

          menu = data.dinner.map((product, i) => {
              return (
                  <Button key={i} color="amber" className="mr-2 mb-3" name={product.nombre} value={product.precio} onClick={()=> this.addToCart(product)}><Fa icon={product.icon} size="3x md" className="m-1"/><br/>{product.nombre}</Button>
              )
          })
      } else if (this.state.extra){
          menu = data.extra.map((product, i) => {
              return (
                  <Button key={i} color="amber lighten-5" className="mr-5 mb-3" name={product.nombre} value={product.precio} onClick={()=> this.addToCart(product)}><Fa icon={product.icon} size="3x lg" className="m-1"/><br/>{product.nombre}</Button>
              )
          })
      }

      
      return (
          <div>
          <NavbarApp />
          <section className="container mt-4">
          <label id="exampleForm2">Nombre cliente</label>
          <input type="text" id="exampleForm2" className="form-control col-8 mb-3" name="client" onChange={this.handleChangeName.bind(this)}></input>
          <Button className="mr-4 rounded" size="lg" color="lime darken-4" onClick={this.handleChangeBreakfast.bind(this)}>Desayunos</Button>
          <Button className="rounded" size="lg" color="orange darken-4" onClick={this.handleChangeDinner.bind(this)}>Comida</Button>
          {button}

          <section className="mt-4">
          {menu}   
          </section>
          </section>
          <Ticket />
          </div>
      )
  }

  addToCart(product){
      store.dispatch({
          type: "ADD_TO_ORDER",
          product
      })
  }
}


export default withRouter(Wall);