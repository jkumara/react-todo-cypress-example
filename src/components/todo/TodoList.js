import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { removeTodo, toggleTodo } from './todoReducer'
import { TodoListItem } from './TodoListItem'
import { sortById } from './todoUtils'

const List = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${p => p.theme.color.panelBorder};

  list-style: none;
`

// Component

export const TodoList = ({todos, removeTodo, toggleTodo}) => (
  <List>
    { sortById(todos).map(t => <TodoListItem {...t}
                                   key={t.id}
                                   toggleTodo={toggleTodo}
                                   removeTodo={removeTodo} />)}
  </List>
)

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  removeTodo: React.PropTypes.func.isRequired
}

// Container

const mapStateToProps = state => ({
  todos: state.todo.todos
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeTodo,
  toggleTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
