const ADD = "todo/add"
const REMOVE = "todo/remove"
const TOGGLE_DONE = "todo/toggle-done"

const initialState = {
  todos: []
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      return state
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
