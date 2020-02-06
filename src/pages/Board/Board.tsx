import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './BoardStyles';
import uuidv4 from 'uuid';
import List from '../../components/List';
import { createList } from '../../store/actions';
import { myState } from '../../utils/utils';
import { Droppable } from 'react-beautiful-dnd';
import { HomeProps } from '../../utils/utils'

const Board: React.FunctionComponent<HomeProps> = ({ openBoard, closeBoard }) => {
  const [listTitle, setListTitle] = useState();
  const [addList, setAddList] = useState(false);

  const dispatch = useDispatch();

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



  const {
    lists
  } = useSelector((state: myState) => ({
    lists: state.lists,
  }), shallowEqual)

  return (
    <Wrapper openBoard={openBoard} closeBoard={closeBoard}>
      <header>d-Productivity</header>
      <Droppable
        droppableId="all-lists"
        direction="horizontal"
        type="list">
        {provided => (
          <div
            className='cards'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists && Object.entries(lists).map((list, i) => {
              return <List
                key={list[0]}
                listTitle={list[1]}
                listId={list[0]}
                index={i} />
            })}
            {provided.placeholder}
            {addList &&
              <div className='list-title'>
                <input type="text" placeholder='Enter list title' onChange={handleSetSectionTitle} autoFocus />
                <div>
                  <button onClick={handleSubmitList}>Add List</button>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            }
            <button onClick={handleAddList} className='btn-add-list'>
              <FontAwesomeIcon icon={faPlus} /><span>Add another List</span>
            </button>
          </div>
        )}
      </Droppable>
    </Wrapper>
  )
}

export default Board;
