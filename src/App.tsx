import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './AppStyles';
import uuidv4 from 'uuid';
import Stage from './components/Stage';
import { createSection } from './store/actions'


const App = () => {
  const [sectionTitle, setSectionTitle] = useState();
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();

  const handleSetSectionTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionTitle(event.target.value)
  }

  const handleSubmitSectionTitle = () => {
    const id = uuidv4()
    dispatch(createSection(sectionTitle, id))
    setAddList(false)
  }

  const handleAddList = () => {
    setAddList(true)
  }

  interface myState {
    titles: {
      [key: number]: string
    },
    tasks: {
      [key: number]: {
        [key: string]: number | string
      }
    }
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
      <div className='cards'>
        {lists && Object.entries(lists).map((list, i) => {
          return <Stage key={list[0]} title={list[1]} />
        })}
        {/* {lists && Object.values(lists.titles).map((list, i) => {
          return <Stage
            title={list[0]}
            tasks={list[1]}
            key={i}
            id={i} />
        })} */}
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
    </Wrapper>
  )
}

export default App;
