import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store'

import Stage from './Stage';


const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    background-color: #5F01D0;
    font-family: sans-serif;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`
const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Wrapper>
        <Stage />
      </Wrapper>
    </Provider>
  )
}

export default App;
