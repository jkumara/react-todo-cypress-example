import { keyframes } from 'styled-components'

export const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const pulse = keyframes`
  0%, 66% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.2);
  }
`
