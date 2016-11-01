import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { removeTodo } from './todoReducer'
import { TodoListItem } from './TodoListItem'

const List = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${p => p.theme.color.panelBorder};

  list-style: none;
`

// Component

export const TodoList = ({todos, removeTodo}) => (
  <List>
    { todos.map(t => <TodoListItem {...t} key={t.id} removeTodo={removeTodo} /> ) }
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
  removeTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
