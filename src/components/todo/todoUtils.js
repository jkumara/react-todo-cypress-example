export const generateTodo = text => ({
  text,
  id: new Date().getTime(),
  isDone: false
})
