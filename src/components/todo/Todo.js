import React from 'react'
import styled from 'styled-components'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Panel = styled.div`
  margin: 2rem auto;
  max-width: 35rem;

  background: ${p => p.theme.color.panelBg};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.025)
  font-size: 1.5rem;
`

const Todo = () => (
    <Panel>
      <TodoInput />
      <TodoList />
    </Panel>
  )

export default Todo
