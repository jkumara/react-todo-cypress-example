import React from 'react'
import styled from 'styled-components'
import { CheckButton } from '../buttons/CheckButton'
import { IconButton } from '../buttons/IconButton'
import { appear } from '../styles/keyframes'

const ListItem = styled.li`
  position: relative;
  border-bottom: 1px solid ${p => p.theme.color.panelBorder};
  animation: ${appear} 0.5s 1;
`

const ToggleButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const RemoveButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.5em;
  transform: translateY(-50%);
`

const Note = styled.div`
  padding: 0.5em 2em;
  width: 100%;

  color: ${p => p.isDone ? p.theme.color.disabledText : p.theme.color.text}
  text-decoration: ${p => p.isDone ? 'line-through' : 'none'}
  line-height: 1.5;

  transition: color 0.75s;
`

export const TodoListItem = ({id, text, isDone, toggleTodo, removeTodo}) => (
  <ListItem>
    <ToggleButtonWrapper>
      <CheckButton id={`btn-${id}`} onClick={toggleTodo.bind(null, id)} active={isDone} />
    </ToggleButtonWrapper>

    <Note isDone={isDone}>
      <label htmlFor={`btn-${id}`}>{text}</label>
    </Note>

    <RemoveButtonWrapper>
      <IconButton onClick={removeTodo.bind(null, id)} iconId='cross' />
    </RemoveButtonWrapper>
  </ListItem>
)

TodoListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  toggleTodo: React.PropTypes.func.isRequired,
  removeTodo: React.PropTypes.func.isRequired
}
