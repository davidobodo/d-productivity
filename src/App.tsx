import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
    <Fragment>
      <GlobalStyles />
      <Wrapper>
        <Stage />
      </Wrapper>
    </Fragment>
  )
}

export default App;
