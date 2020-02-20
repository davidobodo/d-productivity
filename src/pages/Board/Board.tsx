import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './BoardStyles';
import uuidv4 from 'uuid';
import List from '../../components/List';
import { createList } from '../../store/actions';
import { myState, convertArrayToObject2 } from '../../utils/utils';
import { HomeProps } from '../../utils/utils';
import { sortList } from '../../store/actions';

const Board: React.FunctionComponent<HomeProps> = ({ openBoard, closeBoard }) => {
  const [listTitle, setListTitle] = useState();
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();
  const lists = useSelector((state: myState) => state.lists, shallowEqual);

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
            handleDragStartList={(e: MouseEvent) => handleDragStartList(e, list[0], i)}
            handleDragOverList={(e: MouseEvent) => handleDragOverList(e, list[0], i)} />
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
