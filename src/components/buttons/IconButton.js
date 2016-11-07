import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { pulse } from '../styles/keyframes'

const Button = styled.button`
  display: inline-block;
  width: 1.66em;
  height: 1.66em;
  border: none;
  padding: 0;
  margin: 0 0.5em;

  cursor: pointer;
  font-size: 1.1rem;
  background: none;
  text-align: center;
  line-height: 1.66em;

  &:hover {
    animation: ${pulse} 1s infinite;
  }
`

const IconWrapper = styled.div`
  display: inline-block;
  padding-top: 0.2em;
  height: 1em;

  color: ${p => p.theme.color.icon}
`

export const IconButton = ({onClick, iconId, id, className}) => (
  <Button id={id || ''} className={className || ''} onClick={onClick}>
    <IconWrapper>
      <Icon id={iconId} />
    </IconWrapper>
  </Button>
)

IconButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  iconId: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  id: React.PropTypes.string
}
