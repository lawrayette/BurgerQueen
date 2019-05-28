import React, { Component } from 'react'
import firebase from 'firebase'
import { withRouter } from 'react-router-dom'

let firestore = firebase.firestore()

class OrderList extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      orders: []
    })
  }

  componentWillMount () {
    firestore.collection('orders').onSnapshot((querySnapshot) => {
      const orders = []
      querySnapshot.forEach((doc) => {
        const { status, order, name } = doc.data()
        let dataOrder = { status, order, name, id: doc.id }
        orders.push(dataOrder)
      }
      )
      this.setState({ orders })
    })
  }


  render () {
    let status
    let infoOrder = this.state.orders.map((element, i) => {
      
      let product = element.order.map((product, i) => {
        return <p key={i}>{product.item}</p>

      })
      return (
        <tr key={i}>
          <td >{element.name}</td>
          <td>{product}</td>
          <td >En cocina</td>
        </tr>
      )
    })
    return (
      <section className='kitchen-container'>
        <article className='kitchen'>
          <table className='table-kitchen-container'>
            <thead className='head-table' >
              <tr>
                <th className='header-table' ><strong>Nombre</strong></th>
                <th className='header-table'><strong>Pedido</strong></th>
                <th className='header-table'><strong>Status</strong></th>
               
              </tr>
            </thead>
            <tbody>
              { infoOrder }
            </tbody>
          </table>
        </article>
      </section>
    )
  }
}

export default withRouter(OrderList)
