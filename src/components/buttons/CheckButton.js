import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { appear } from '../styles/keyframes'

const Button = styled.button`
  display: inline-block;
  width: 1.66em;
  height: 1.66em;
  border: 1px solid;
  border-color: ${p => p.active ? p.theme.color.toggleActiveBorder : p.theme.color.toggleBorder};
  padding: 0;
  margin: 0 0.5em;

  font-size: 1.1rem;
  background: none;
  border-radius: 50%;
  text-align: center;
  line-height: 1.66em;
  overflow: hidden;

  transition: border-color 0.5s;
`

const Check = styled.div`
  display: ${p => p.active ? 'inline-block' : 'none'};
  padding-top: 0.2em;
  height: 1em;

  color: ${p => p.theme.color.toggleIcon}
  animation: ${appear} 0.5s 1;
`

export const CheckButton = ({onClick, active, id}) => (
  <Button id={id || ''} onClick={onClick} active={active}>
    <Check active={active}>
      <Icon id='check' />
    </Check>
  </Button>
)

CheckButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  active: React.PropTypes.bool.isRequired,
  id: React.PropTypes.string
}
