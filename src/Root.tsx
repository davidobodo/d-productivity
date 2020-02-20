import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import { myState } from './utils/utils';

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
    font-family: sans-serif;
  }
`

const Root = () => {
  const dispatch = useDispatch()
  const [openBoard, setOpenBoard] = useState(false);
  const [closeBoard, setCloseBoard] = useState(false);

  const {
    allLists,
    allCards
  } = useSelector((state: myState) => ({
    allLists: state.lists,
    allCards: state.cards,
  }), shallowEqual)

  const handleSetCloseBoard = () => {
    setCloseBoard(true)
    setOpenBoard(false)
  }

  return (
    <>
      <GlobalStyles />
      <Board
        openBoard={openBoard}
        closeBoard={closeBoard} />
      <Home
        openBoard={openBoard}
        handleSetOpenBoard={() => setOpenBoard(true)}
        handleSetCloseBoard={handleSetCloseBoard} />
    </>
  )
}

export default Root;