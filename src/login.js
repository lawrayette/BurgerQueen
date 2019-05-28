import React, {
  Component
} from 'react'
import fire from './fire'
import LogoLogin from './components/LogoLogin'

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
    fire.auth().signInWithEmailAndPassword(this.state.email, 
      this.state.password).then((u) => { })
      .catch((error) => {
        console.log(error)
          .then(result => this.props.history.push('/wall'))
          .catch(function(error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
            alert('Email no válido, revisa la información.')
            } else if (error.code === 'auth/wrong-password') {
            alert('Password no válido, revisa la información.')
            }
          })
      })
  }
  signup (e) {
    e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => { }).then((u) => {
      console.log(u)
    })
      .catch((error) => {
        console.log(error)
      })
  }
  render () {
    return (
      <main id='main'>
        <LogoLogin />
        <article>
          <input value={this.state.email} onChange={this.handleChange} id='email-input' type='email' name='email'placeholder='Coloca el email' />
          <input value={this.state.password} onChange={this.handleChange} id='password' type='password' name='password' placeholder='Contraseña' />
        </article>
        <article>
          <button id='submit-login' type='submit' onClick={this.login} >Ingresar</button>
        </article>
      </main>
    )
  }
}

export default Login
