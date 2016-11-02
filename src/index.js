import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/app/App'

const wrapper = document.querySelector('.js-todo')
const todoApp = (<Provider store={store}><App /></Provider>)

ReactDOM.render(todoApp, wrapper)
