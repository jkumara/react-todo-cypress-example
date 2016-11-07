import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getDone, getUndone } from './todoUtils'

const Status = styled.p`
  font-size: 1rem;
  text-align: center;
`

const getDoneString = done => `${done} ${done > 1 ? 'things' : 'thing' } done.`
const getUndoneString = undone => `${undone} ${undone > 1 ? 'things' : 'thing' } left to do.`

// Component

export const TodoStats = ({done, undone}) => (
  <Status>
    {done ? getDoneString(done) : ''}&nbsp;
    {undone ? getUndoneString(undone) : 'Nothing left to do.'}
  </Status>
)

// Container

const mapStateToProps = state => ({
  done: getDone(state.todo.todos).length,
  undone: getUndone(state.todo.todos).length
})

export default connect(mapStateToProps)(TodoStats)
