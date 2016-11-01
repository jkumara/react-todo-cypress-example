import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import todo from './todo/todoReducer'
import App from './app/App'

const reducer = combineReducers({todo})
const store = createStore(reducer)
const wrapper = document.querySelector('.js-todo')
const todoApp = (<Provider store={store}><App /></Provider>)

ReactDOM.render(todoApp, wrapper)
