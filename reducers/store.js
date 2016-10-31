import { createStore, combineReducers } from "redux"
import todoReducer from "./todo/todo"

const reducer = combineReducers({
  todoReducer
})

export default createStore(reducer)
