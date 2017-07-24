import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Todos from './todos'
import Login from './login'

let reactElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Login />
  </Provider>,
  reactElement
)
