import R from 'ramda'

export const saveToLocal = (data, key) => localStorage.setItem(key, JSON.stringify(data))

export const loadFromLocal = key => JSON.parse(localStorage.getItem(key))

export const generateTodo = text => ({
  text,
  id: new Date().getTime(),
  isDone: false
})

export const findById = id => R.find(R.propEq('id', id))

export const rejectById = id => R.reject(R.propEq('id', id))

export const toggleTodoDone = todo => ({
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

export const getDone = todos => R.filter(R.prop('isDone'))(todos)

export const getUndone = todos => R.reject(R.prop('isDone'))(todos)
