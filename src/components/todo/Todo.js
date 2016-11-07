import React from 'react'
import styled from 'styled-components'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

const Panel = styled.div`
  margin: 1em auto;
  max-width: 35rem;

  background: ${p => p.theme.color.panelBg};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.025)
  font-size: 1.5rem;
`

const Todo = () => (
  <div>
    <Panel>
      <TodoInput />
      <TodoList />
    </Panel>
    <TodoStats />
  </div>
)

export default Todo
