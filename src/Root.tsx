import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import { createGlobalStyle } from 'styled-components';
import App from './App';

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

const Root = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <App />
        </Provider>
    )
}

export default Root;