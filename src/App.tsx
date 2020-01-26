import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector, shallowEqual, } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

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
  align-items: center;
`
const App = () => {
  const [sectionTitle, setSectionTitle] = useState();
  const dispatch = useDispatch();

  const handleSetSectionTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSectionTitle(event.target.value)
  }

  const handleSubmitSectionTitle = () => {
    dispatch(createSection(sectionTitle))
  }

  const { task } = useSelector(state => ({
    task: state,
  }), shallowEqual)

  console.log(task)

  return (
    <Fragment>
      <GlobalStyles />
      <Wrapper>
        <TextArea
          handleSubmitTextArea={handleSubmitSectionTitle}
          handleUpdateTextArea={handleSetSectionTitle}
          placeholder='Enter details for this task'
          buttonText='Add Card' />
        {task && Object.keys(task).map((o, i) => {
          return <Stage title={o} />
        })}
      </Wrapper>
    </Fragment>
  )
}

export default App;
