import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Stage from './components/Stage';
import TextArea from './components/TextArea';

import { createSection } from './store/actions'


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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: start;
  padding-top: 5rem;

  .list-title{
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 0.5rem;
    background-color: #ECECF0;
    border-radius: 3px;

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
    width: 300px;
    border-radius: 3px;

    :hover{
        background-color: #ACACAC;
    }

    svg{
        margin-right: 10px;
    }
}
`
const App = () => {
  const [sectionTitle, setSectionTitle] = useState();
  const dispatch = useDispatch();

  const handleSetSectionTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSectionTitle(event.target.value)
  }

  const handleSubmitSectionTitle = () => {
    dispatch(createSection(sectionTitle))
  }

  const handleAddList = () => {

  }

  const { lists } = useSelector(state => ({
    lists: state,
  }), shallowEqual)



  return (
    <Fragment>
      <GlobalStyles />
      <Wrapper>
        {lists && Object.entries(lists).map((list, i) => {
          return <Stage title={list[0]} tasks={list[1]} key={i} />
        })}
        <div className='list-title' style={{ marginRight: '1rem' }}>
          <input type="text" placeholder='Enter list title' onChange={handleSetSectionTitle} />
          <div>
            <button onClick={handleSubmitSectionTitle}>Add Card</button>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <button onClick={handleAddList} className='btn-add-list' style={{ marginRight: '1rem' }}>
          <FontAwesomeIcon icon={faPlus} /><span>Add another List</span>
        </button>
      </Wrapper>
    </Fragment>
  )
}

export default App;
