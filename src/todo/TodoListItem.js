import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${p => p.theme.color.panelBorder};
`

export const TodoListItem = ({id, text, isDone, removeTodo}) => (
  <ListItem>
    { text }
  </ListItem>
)

TodoListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  removeTodo: React.PropTypes.func.isRequired
}
