import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

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
  }
`
const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
    </Fragment>
  )
}

export default App;
