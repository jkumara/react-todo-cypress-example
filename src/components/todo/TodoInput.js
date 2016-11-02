import React from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from './todoReducer'

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

// Component

class TodoInput extends React.Component {

  static propTypes = {
    addTodo: React.PropTypes.func.isRequired
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.addTodo(this.input.value)
    this.input.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <TextInput innerRef={inp => this.input = inp} placeholder="What needs done?" />
      </form>
    )
  }

}

// Container
const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo
}, dispatch)

export default connect(() => ({}), mapDispatchToProps)(TodoInput)
