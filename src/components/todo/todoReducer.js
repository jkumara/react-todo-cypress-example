import { generateTodo } from './todoUtils'

const ADD = 'todo/add'
const REMOVE = 'todo/remove'
const TOGGLE_DONE = 'todo/toggle-done'

const initialState = {
  todos: [
    {id: 1, text: 'kill', isDone: false},
    {id: 2, text: 'kill', isDone: true}
  ]
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const todos = [...state.todos, generateTodo(action.text)]

      return {
        ...state,
        todos
      }
    }
    case REMOVE: {
      return state
    }
    case TOGGLE_DONE: {
      return state
    }
    default: {
      return state
    }
  }
}

export const addTodo = (text) => ({
  type: ADD,
  text
})

export const removeTodo = (id) => ({
  type: REMOVE,
  id
})

export const toggleTodo = (id) => ({
  type: TOGGLE_DONE,
  id
})