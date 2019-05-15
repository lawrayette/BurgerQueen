import React, {
  Component
} from 'react'
import Logo from './assets/LOGO'
import fire from './fire'

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
    fire.auth().signInWithEmailAndPassword(this.state.password).then((u) => { }).catch((error) => {
      console.log(error)
      alert('Contraseña o usuario incorrecto')
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
       <>
         <Logo />
       </>
    )
  }
}

export default Login
