import React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
  width: 100%;
  padding: 1em;
  border: none;

  font-weight: 300;

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-style: italic;
    font-family: 'Work Sans';
  }
`

const TodoInput = () => (
    <TextInput placeholder="What needs done?" />
  )

export default TodoInput
