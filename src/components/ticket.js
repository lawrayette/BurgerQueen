import React, { Component } from 'react'
import './ticket.css'
import { Table, TableBody,  Button } from "mdbreact"
import { withRouter } from 'react-router-dom'
import store from '../store'
import { firestore } from '../fire'

class Orders extends Component {
  constructor (props) {
    super(props)
    this.state = {
      order: []
    }
    store.subscribe(() => {
      this.setState({
        order: store.getState().order
      })
      console.log(this.state.order)
    })
  }

  removeFromOrder (product, i) {
    store.dispatch({
      type: "REMOVE_FROM_ORDER",
      product,
      i
    })
  }

  sendKitchen () {
    const { name } = this.props
    if (!name) {
    alert('Ingresar nombre cliente')
    }
    if (this.state.order.length === 0) {
    alert('Ingresa producto')
    }
    else {
      firestore.collection("orders").add({
        order: this.state.order,
        status: "En cocina",
        name
      })
        .then(function () {
        })
      this.props.history.push('/')
    }
  }
  render () {
    let order
    let total = 0
    order = this.state.order.map((product, i) => {
      console.log(product)
      return <tr key={i}>
        <td >{product.item}</td>
        <td >{product.price}</td>
        <td >
          <Button className='delete-item' onClick={() =>this.removeFromOrder(product, i)}><br/></Button></td>
     </tr>
    })

    this.state.order.forEach(product => {
    // console.log(product.precio)
      total += product.price
    })
    return (
      <section className='ticket'>
        <div >
          <div >
            <Table>
              <TableBody>
              {order}
              </TableBody>
            </Table>
          </div>
          <div>
            <p >Total<br />${total}</p>
            <Button className='send-ticket' onClick={this.sendKitchen.bind(this)}>Pedido</Button>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Orders)
