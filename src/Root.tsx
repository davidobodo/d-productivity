import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home'
import { sortTasks } from './store/actions'

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
  const dispatch = useDispatch()
  const [openBoard, setOpenBoard] = useState(false);

  const handleOnDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    // if (type === "list") {
    //   return;
    // }
    dispatch(sortTasks(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))

  }

  const handleSetCloseBoard = () => {
    setOpenBoard(false)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <GlobalStyles />
      <Board openBoard={openBoard} />
      <Home
        handleSetOpenBoard={() => setOpenBoard(true)}
        handleSetCloseBoard={handleSetCloseBoard} />
    </DragDropContext>
  )
}

export default Root;