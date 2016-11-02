import { createStore, combineReducers } from 'redux'
import todo from './components/todo/todoReducer'

const reducer = combineReducers({
  todo
})

export default createStore(reducer)
