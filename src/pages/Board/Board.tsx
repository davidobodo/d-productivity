import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './BoardStyles';
import uuidv4 from 'uuid';
import List from '../../components/List';
import { createList } from '../../store/actions';
import { myState, convertArrayToObject2, convertArrayToObject } from '../../utils/utils';
import { HomeProps } from '../../utils/utils';
import { sortList, sortCard } from '../../store/actions';

const Board: React.FunctionComponent<HomeProps> = ({ openBoard, closeBoard }) => {
  const [listTitle, setListTitle] = useState();
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();
  const lists = useSelector((state: myState) => state.lists, shallowEqual);
  const allCards = useSelector((state: myState) => state.cards, shallowEqual)

  let dragTypeCard: string;
  let movedListId: any;
  let movedListSourceIndex: number;
  let movedListDestinationIndex: number;

  const handleSetSectionTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListTitle(event.target.value)
  }

  const handleSubmitList = () => {
    const listId = uuidv4()
    dispatch(createList(listTitle, listId))
    setAddList(false)
  }

  const handleAddList = () => {
    setAddList(true)
  }



  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //drag and drop functionality for cards start

  let dragTypeList: string;
  // let dragTypeCard: string;
  let movedCardSourceIndex: number;
  let movedCardDestinationIndex: number;
  let movedCardId: any;
  let sourceListId: number | string;
  let destinationListId: number | string;

  const handleDragStartCard = (e: any, cardId: number | string, cardIndex: number, listId: string | number): void => {
    e.target.style.opacity = "0.3";
    e.dataTransfer.setData("cardId", cardId);
    e.dataTransfer.setData("movedCardSourceIndex", cardIndex)
    e.dataTransfer.setData("sourceListId", listId);
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData("dragTypeCard", "card");
  }

  const handleDragEnterCard = (e: any): void => {
    e.preventDefault();
  }

  const handleDragOverCard = (e: any, listId: number | string, cardIndex: number): void => {
    e.preventDefault();
    movedCardDestinationIndex = cardIndex;
    destinationListId = listId;
    e.dataTransfer.dropEffect = 'move';

    //placeholder login start---------------------------------------------------
    console.log(movedCardDestinationIndex, destinationListId)
    const newStateArray = Object.values(allCards)
    const activeList = newStateArray.filter(card => card.listId === destinationListId);
    console.log(activeList)
    activeList.splice(movedCardDestinationIndex, 0);

    //placeholder login end----------------------------------------------------
  }

  const handleOnDragEndCard = (e: any): void => {
    e.preventDefault();
    e.target.style.opacity = '';
  }

  const handleOnDropCard = (e: any): void => {
    e.preventDefault();

    movedCardId = e.dataTransfer.getData("cardId");
    movedCardSourceIndex = e.dataTransfer.getData("movedCardSourceIndex");
    sourceListId = e.dataTransfer.getData("sourceListId");
    dragTypeList = e.dataTransfer.getData("dragTypeList");
    dragTypeCard = e.dataTransfer.getData("dragTypeCard");

    if (dragTypeCard == "") {
      return;
    }

    if (sourceListId === destinationListId) {
      const newStateArray = Object.values(allCards)

      const activeList = newStateArray.filter(card => card.listId === sourceListId);
      const remainingList = newStateArray.filter(card => card.listId !== sourceListId);

      const movedCard = activeList.splice(movedCardSourceIndex, 1);
      activeList.splice(movedCardDestinationIndex, 0, ...movedCard);
      remainingList.push(...activeList)

      const convertedArray = convertArrayToObject(remainingList, 'cardId');
      dispatch(sortCard(convertedArray))
    }

    if (sourceListId !== destinationListId) {
      const newStateArray = Object.values(allCards);
      allCards[movedCardId].listId = destinationListId;

      const activeList = newStateArray.filter(card => card.listId === destinationListId);
      const remainingList = newStateArray.filter(card => card.listId !== destinationListId);

      const handleGetIndex = (card: any) => {
        return card.cardId === movedCardId
      }

      const movedCardIndex = activeList.findIndex(handleGetIndex)
      const movedCard = activeList.splice(movedCardIndex, 1);
      activeList.splice(movedCardDestinationIndex, 0, ...movedCard);
      remainingList.push(...activeList)

      const convertedArray = convertArrayToObject(remainingList, 'cardId');
      dispatch(sortCard(convertedArray));
      handleOnDragEndCard(e);
    }

  }

  //drag and drop functionality for cards end
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------






  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //drag and drop functionality for lists start

  const handleDragStartList = (e: any, listId: number | string, listIndex: number): void => {
    e.target.style.opacity = '0.3';
    e.dataTransfer.setData("listId", listId);
    e.dataTransfer.setData("movedListSourceIndex", listIndex)
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData("dragTypeList", "list");
  }

  const handleDragOverList = (e: any, listId: number | string, listIndex: number): void => {
    e.preventDefault();
    movedListDestinationIndex = listIndex;

    destinationListId = listId;

    const _list = Object.values(allCards).filter(card => card.listId == listId);
    if (_list.length == 0) {
      movedCardDestinationIndex = 0;
    }

    e.dataTransfer.dropEffect = 'move';
  }

  const handleOnDropList = (e: any): void => {
    e.preventDefault();
    movedListId = e.dataTransfer.getData("listId");
    movedListSourceIndex = e.dataTransfer.getData("movedListSourceIndex");
    dragTypeCard = e.dataTransfer.getData("dragTypeCard");

    if (dragTypeCard === "card") {
      return;
    }

    const _lists = Object.entries(lists);
    const movedList = _lists.splice(movedListSourceIndex, 1);
    _lists.splice(movedListDestinationIndex, 0, ...movedList);

    const convertedArray = convertArrayToObject2(_lists);
    dispatch(sortList(convertedArray))
  }

  //drag and drop functionality for lists end
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------



  return (
    <Wrapper
      openBoard={openBoard}
      closeBoard={closeBoard}
      onDrop={handleOnDropList}
    >
      <header>d-Productivity</header>
      <div className='cards'>
        {lists && Object.entries(lists).map((list, i) => {
          return <List
            key={list[0]}
            listTitle={list[1]}
            listId={list[0]}
            index={i}
            handleDragEnterCard={handleDragEnterCard}
            handleOnDropCard={handleOnDropCard}
            handleOnDragEndCard={handleOnDragEndCard}
            handleDragStartList={(e: MouseEvent) => handleDragStartList(e, list[0], i)}
            handleDragOverList={(e: MouseEvent) => handleDragOverList(e, list[0], i)}
            handleDragStartCard={handleDragStartCard}
            handleDragOverCard={handleDragOverCard}
          />
        })}
        {addList &&
          <div className='list-title'>
            <input type="text" placeholder='Enter list title' onChange={handleSetSectionTitle} autoFocus />
            <div>
              <button onClick={handleSubmitList}>Add List</button>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>}
        <button onClick={handleAddList} className='btn-add-list'>
          <FontAwesomeIcon icon={faPlus} /><span>Add another List</span>
        </button>
      </div>
    </Wrapper>
  )
};



export default Board;
