import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

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
  margin-top: 0.2em;
  display: ${p => p.active ? 'inline-block' : 'none'};
`

export const ToggleButton = ({onClick, active}) => (
  <Toggle>
    <ToggleIcon active={active}>
      <Icon id='check' />
    </ToggleIcon>
  </Toggle>
)

ToggleButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  active: React.PropTypes.bool
}
