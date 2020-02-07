import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import { sort } from './store/actions';
import { myState, convertArrayToObject, cloneObject } from './utils/utils';

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
  const [closeBoard, setCloseBoard] = useState(false);

  const {
    allLists,
    allCards
  } = useSelector((state: myState) => ({
    allLists: state.lists,
    allCards: state.cards,
  }), shallowEqual)

  const handleOnDragEnd = (result: any) => {
    const { destination, source, draggableId, type: dragType } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const newStateArray = Object
        .values(allCards)

      const activeList = newStateArray
        .filter(card => card.listId === source.droppableId);
      const remainingList = newStateArray
        .filter(card => card.listId !== source.droppableId);

      //rearrage cards in activeList array
      const movedCard = activeList.splice(source.index, 1);
      activeList.splice(destination.index, 0, ...movedCard);

      remainingList.push(...activeList)

      const convertedArray = convertArrayToObject(remainingList, 'cardId');

      dispatch(sort(convertedArray))
    }

    if (source.droppableId !== destination.droppableId) {
      const newState = allCards;
      newState[draggableId].listId = destination.droppableId;

      const newStateArray = Object.values(newState);

      const activeList = newStateArray.filter(card => card.listId === destination.droppableId);
      const remainingList = newStateArray.filter(card => card.listId !== destination.droppableId);

      const handleGetIndex = (card: any) => {
        return card.cardId === draggableId
      }

      const movedCardIndex = activeList.findIndex(handleGetIndex)
      const movedCard = activeList.splice(movedCardIndex, 1);

      activeList.splice(destination.index, 0, ...movedCard);
      remainingList.push(...activeList)

      const convertedArray = convertArrayToObject(remainingList, 'cardId');

      dispatch(sort(convertedArray));

    }
    // dispatch(sort(
    //   source.droppableId,
    //   destination.droppableId,
    //   source.index,
    //   destination.index,
    //   draggableId,
    //   dragType
    // ))

  }

  const handleSetCloseBoard = () => {
    setCloseBoard(true)
    setOpenBoard(false)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <GlobalStyles />
      <Board
        openBoard={openBoard}
        closeBoard={closeBoard} />
      <Home
        openBoard={openBoard}
        handleSetOpenBoard={() => setOpenBoard(true)}
        handleSetCloseBoard={handleSetCloseBoard} />
    </DragDropContext>
  )
}

export default Root;