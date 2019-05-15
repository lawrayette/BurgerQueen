import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/navBar'
import Ticket from './components/ticket'
import Menu from './components/order'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Header />, document.getElementById('root'))
ReactDOM.render(<Ticket />, document.getElementById('root'))
ReactDOM.render(<Menu />, document.getElementById('root'))

serviceWorker.unregister()
