import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';
import App from './App';
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

  const handleOnDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    console.log(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    )
    dispatch(sortTasks(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))

  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <GlobalStyles />
      <App />
    </DragDropContext>
  )
}

export default Root;