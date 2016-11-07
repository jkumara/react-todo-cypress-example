import {
  saveToLocal,
  loadFromLocal,
  generateTodo,
  toggleTodoDoneById,
  removeTodoById
} from './todoUtils'

const ADD = 'todo/add'
const REMOVE = 'todo/remove'
const TOGGLE_DONE = 'todo/toggle-done'

const initialState = {
  todos: loadFromLocal('todos') || []
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      const todos = [...state.todos, generateTodo(action.text)]
      saveToLocal(todos, 'todos')
      return {
        ...state,
        todos
      }
    }
    case REMOVE: {
      const todos = removeTodoById(state.todos, action.id)
      saveToLocal(todos, 'todos')
      return {
        ...state,
        todos
      }
    }
    case TOGGLE_DONE: {
      const todos = toggleTodoDoneById(state.todos, action.id)
      saveToLocal(todos, 'todos')
      return {
        ...state,
        todos
      }
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

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_DONE,
    id
  }
}
