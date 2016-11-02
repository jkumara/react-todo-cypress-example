import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { ToggleButton } from './ToggleButton'

const ListItem = styled.li`
  position: relative;
  border-bottom: 1px solid ${p => p.theme.color.panelBorder};
`

const Toggle = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: inline-block;
  width: 1.66em;
  height: 1.66em;
  border: 1px solid black;
  padding: 0;
  margin: 0 0.5em;

  font-size: 1.1rem;
  background: none;
  border-radius: 50%;
  text-align: center;
  line-height: 1.66em;
`

const ToggleIcon = styled.div`
  margin-top: 0.25em;
  display: ${p => p.active ? 'inline-block' : 'none'};
`

const Text = styled.div`
  padding: 0.5em 0 0.5em 2em;
  width: 100%;

  line-height: 1.5;
`

export const TodoListItem = ({id, text, isDone, toggleTodo, removeTodo}) => (
  <ListItem>
    <ToggleButton onClick={toggleTodo} active={isDone}></ToggleButton>
    <Text>
      { text }
    </Text>
  </ListItem>
)

TodoListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  removeTodo: React.PropTypes.func.isRequired,
  toggleTodo: React.PropTypes.func.isRequired
}
