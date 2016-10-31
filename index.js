import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import styled from "styled-components"
import store from "./reducers/store"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const wrapper = document.querySelector(".js-todo")
const todoApp = (
  <Provider store={store}>
    <Title>Moi</Title>
  </Provider>
)

ReactDOM.render(todoApp, wrapper)
