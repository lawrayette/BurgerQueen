import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import NavbarApp from '../components/header';

let firestore = firebase.firestore();

// Con la información de firebase se pinta un listado de los productos seleccionados. Falta trabajar persistencia
// de la información con ayuda de firebase.
class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = ({
            orders: []
        })
    }

    // Información de la base de datos
    componentWillMount(){
        firestore.collection('orders').onSnapshot((querySnapshot) => {
            const orders = []
            querySnapshot.forEach((doc) => {
                const {status, order, name} = doc.data();
                let dataOrder = {status, order, name, id: doc.id}
                orders.push(dataOrder);
            })
        this.setState({orders})
        })
    }

    //Actualización de estado del pedido
    status(id){
        const response = window.confirm('Estas seguro de cambiar el status')
        if(response){
        let ref = firestore.collection('orders').doc(id);
        return ref.update({
            status: "Entregada"
        });
    }
}

    render () {
        let status;
        let infoOrder = this.state.orders.map((element, i) => {
            if(element.status === "En cocina"){
                status = <label key={i} className="bs-switch">
                <input  size="sm" type="checkbox" onClick={()=>(this.status(element.id))}/>
                <span className="slider round"></span>
                </label>
            } else {
                status = <label key={i} className="bs-switch">
                        <input  size="sm" type="checkbox" checked/>
                        <span className="slider round"></span>
                        </label>
            }
            let product = element.order.map((product, i) => {
                return  <p key={i}>{product.nombre}</p>
            })
            return (
            
                <tr key={i}>
                    <td className="align-middle">{element.name}</td>
                    <td>{product}</td>
                    <td className="align-middle">En cocina {status}
                        Entregado</td>
                </tr>
            ) 
        })
        return (
            <section>
                <NavbarApp />
            <article className="container mt-5">
                <table className="table container text-center">
                <thead className="grey lighten-2 ">
                    <tr>
                    <th scope="col"><strong>Nombre</strong></th>
                    <th scope="col"><strong>Pedido</strong></th>
                    <th scope="col"><strong>Status</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {infoOrder}
                </tbody>
                </table>
                </article>
                </section>
        )
 
}
}

export default withRouter(OrderList);