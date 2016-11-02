import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;

  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`

export const Icon = ({id}) => (
  <Svg>
    <use xlinkHref={`#icon-${id}`}></use>
  </Svg>
)

Icon.propTypes = {
  id: React.PropTypes.string.isRequired
}
