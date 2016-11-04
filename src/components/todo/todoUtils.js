import R from 'ramda'

export const generateTodo = text => ({
  text,
  id: new Date().getTime(),
  isDone: false
})

const findById = id => R.find(R.propEq('id', id))

const rejectById = id => R.reject(R.propEq('id', id))

const toggleTodoDone = todo => ({
  ...todo,
  isDone: !todo.isDone
})

export const sortById = R.sortBy(R.prop('id'))

export const toggleTodoDoneById = (todos, id) => {
  const todo = findById(id)(todos)
  const updated = toggleTodoDone(todo)
  const unaffected = rejectById(id)(todos)
  return [
    ...unaffected,
    updated
  ]
}

export const removeTodoById = (todos, id) => {
  return [
    ...rejectById(id)(todos)
  ]
}
