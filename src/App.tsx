import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Stage from './components/Stage';

import { createSection } from './store/actions'

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 5rem;
  padding-left: 5rem;

  header{
    font-size: 5rem;
    color: #ffffff;
    
  }

  .cards{
    display: flex;
    align-items: start;

  .list-title{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 0.5rem;
    background-color: #ECECF0;
    border-radius: 3px;
    margin-right: 1rem;

    input{
      border: 2px solid blue;
      font-size: 16px;
      padding: 0.5rem;
      outline: none;
      border-radius: 4px;
      margin-bottom: 6px;
    }

    div{

      button{
        background-color: green;
        color: #ffffff;
        border-radius: 3px;
        padding: 10px;
        width: auto;
        margin-right: 5px;
        outline: none;
      }

      svg{
          transform: rotate(45deg);
      }
    }
  }

  .btn-add-list{
    font-size: inherit;
    color: #ffffff;
    background-color: rgba(0,0,0,0.2);
    margin-bottom: 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: left;
    padding: 1.3rem 1rem 1.3rem 1rem;
    min-width: 300px;
    border-radius: 3px;
    margin-right: 1rem;

    :hover{
        background-color: #ACACAC;
    }

    svg{
        margin-right: 10px;
    }
  }
}
`
const App = () => {
  const [sectionTitle, setSectionTitle] = useState();
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();

  const handleSetSectionTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionTitle(event.target.value)
  }

  const handleSubmitSectionTitle = () => {
    dispatch(createSection(sectionTitle))
    setAddList(false)
  }

  const handleAddList = () => {
    setAddList(true)
  }

  const { lists } = useSelector(state => ({
    lists: state,
  }), shallowEqual)

  return (
    <Wrapper>
      <header>d-Productivity</header>
      <div className='cards'>
        {lists && Object.entries(lists).map((list, i) => {
          return <Stage title={list[0]} tasks={list[1]} key={i} />
        })}
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
