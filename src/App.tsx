import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './AppStyles';
import uuidv4 from 'uuid';
import Stage from './components/Stage';
import { createSection } from './store/actions';
import { myState } from './utils/utils';
import { Droppable } from 'react-beautiful-dnd';


const App = () => {
  const [sectionTitle, setSectionTitle] = useState();
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();

  const handleSetSectionTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionTitle(event.target.value)
  }

  const handleSubmitSectionTitle = () => {
    const titleId = uuidv4()
    dispatch(createSection(sectionTitle, titleId))
    setAddList(false)
  }

  const handleAddList = () => {
    setAddList(true)
  }



  const {
    lists
  } = useSelector((state: myState) => ({
    lists: state.titles,
  }), shallowEqual)

  console.log(lists)


  return (
    <Wrapper>
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
              return <Stage
                key={list[0]}
                title={list[1]}
                titleId={list[0]}
                index={i} />
            })}
            {provided.placeholder}
            {addList &&
              <div className='list-title'>
                <input type="text" placeholder='Enter list title' onChange={handleSetSectionTitle} autoFocus />
                <div>
                  <button onClick={handleSubmitSectionTitle}>Add Card</button>
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

export default App;
