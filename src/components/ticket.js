import React, { Component } from 'react'
import './ticket.css'
import { Table, TableBody,  Button, Fa } from "mdbreact";
import { withRouter } from 'react-router-dom'
import store from '../store'
import { firestore } from '../fire';

class Orders extends Component {
  constructor(props){
      super(props);
      this.state = {
          order: []
      }
      store.subscribe(() => {
          this.setState({
              order: store.getState().order
          })
          console.log(this.state.order)
      });
  }

  removeFromOrder(product, i){
      store.dispatch({
          type: "REMOVE_FROM_ORDER",
          product,
          i})
  }

  sendKitchen(){
      const {name} = this.props
      if(!name){
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
      .then(function() {
          // console.log("Document successfully written!");
      })
      this.props.history.push('/')
  }
  }
 

  render() {
      let order;
      let total = 0
      order = this.state.order.map((product, i) => {
          console.log(product)
          return <tr key={i}>
          <td className="text-center align-middle">{product.item}</td>
          <td className="text-center align-middle">{product.price}</td>
          <td className="text-center align-middle">
          <Button size="sm" color="red darken-4 rounded" onClick={() =>this.removeFromOrder(product, i)}><Fa icon="trash" size="1x"/><br/></Button></td>
          </tr>
      })

      this.state.order.forEach(product => {
          // console.log(product.precio)
          total += product.price
      })

      
  return (
    <section className="container">
      <div className="row mt-5 ">
      <div className="col-7 margin-bottom">
      <Table>
      <TableBody>
      {order}
      </TableBody>
      </Table>
      </div>
       <div className="col-5 text-center ">
           <p className="display-4">Total<br/>${total}</p>
           <Button color="lime" onClick={this.sendKitchen.bind(this)}><Fa icon="paper-plane" size="1x md"/><br/>Pedido</Button>
       </div>
      </div>
  </section>)
}
}

export default withRouter(Orders);