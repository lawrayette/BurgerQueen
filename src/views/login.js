import React, { Component } from 'react'
import firebaseConf from '../firebaseConf/firebaseConf'
import Logo from '../assets/LOGO.png'

class Login extends Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.signup = this.signup.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  login (e) {
    e.preventDefault()
    firebaseConf.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error)
      alert('Contraseña incorrecta')
    })
  }

  signup (e) {
    e.preventDefault()
    firebaseConf.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        console.log(error)
      })
  }
  render () {
    return (
      <div>
        <Logo />
        <div >
          <form >
            <div>
              <input value={this.state.email} onChange={this.handleChange} type='email' name='email' placeholder='email' />
            </div>
            <div>
              <input value={this.state.password} onChange={this.handleChange} type='password'name='password' placeholder='Contraseña' />
            </div >
            <div >
              <button onClick={this.login} >Ingresar</button>
              <button onClick={this.signup} >Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
