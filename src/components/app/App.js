import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import theme from '../styles/baseTheme'
import Todo from '../todo/Todo'

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: ${theme.color.bodyBg};
    font-smoothing: antialiased;
  }
`

const Wrapper = styled.div`
  padding: 2rem 0;

  font-family: 'Work Sans';
  font-weight: 300;
  font-size: 1rem;
  color: ${p => p.theme.color.text};
`

const Title = styled.h1`
  margin: 0;

  color: ${p => p.theme.color.title};
  font-size: 6rem;
  text-align: center;
  font-family: 'Damion';
  font-weight: normal;
  text-shadow: 3px 0px 0px black;
`

const Subtitle = styled.p`
  margin: 1em 0;

  font-size: 1rem;
  text-align: center;
`

const App = () => (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>Todo</Title>
        <Subtitle>Keep on top of your tasks.</Subtitle>
        <Todo />
      </Wrapper>
    </ThemeProvider>
  )

export default App
