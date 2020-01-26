import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createTask } from '../store/actions';

import Card from './Card';
import TextArea from './TextArea';

const Wrapper = styled.div`
    width: 300px;
    color: #000000;
    background-color: #ECECF0;
    padding: 2rem 1rem 0rem;
    border-radius: 3px;
    font-size: 16px;

    .stage__title{
        display: flex;
        justify-content: space-between;
        height: 2rem;
        align-items: center;
        margin-bottom: 1rem;

        &__header{
            font-weight: 600;
            padding-left: 1rem;
        }

        &__options{
            font-size: 2.5rem;
            padding-bottom: 1rem;
        }
    }

    button{
        font-size: inherit;
        color: #6B778C;
        background-color: transparent;
        margin-bottom: 1.5rem;
        border: none;
        outline: none;
        cursor: pointer;
        width: 100%;
        text-align: left;
        padding: 0.5rem 1rem;
        border-radius: 3px;

        :hover{
            background-color: #ACACAC;
        }

        svg{
            margin-right: 10px;
        }
    }
`

interface Props {
    title?: string
}

const Stage: React.FunctionComponent<Props> = ({ title }) => {
    const [addTask, setAddTask] = useState(false);
    const [taskDetails, setTaskDetails] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        setAddTask(!addTask);
    }

    const handleSetTaskDetails = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDetails(event.target.value)
    }

    const handleSubmitTask = () => {
        dispatch(createTask(taskDetails, title));
        handleAddTask();
    }

    const { task } = useSelector(state => ({
        task: state,
    }), shallowEqual)

    return (
        <Wrapper>
            <div className='stage__title'>
                <span className='stage__title__header'>{title}</span>
                <span className='stage__title__options'>...</span>
            </div>
            {/* {task && Object.values(task).map((task: string, i: number) => {
                return <Card task={task} key={i} />
            })} */}

            {addTask &&
                <TextArea
                    handleShowTextArea={handleAddTask}
                    handleSubmitTextArea={handleSubmitTask}
                    handleUpdateTextArea={handleSetTaskDetails}
                    placeholder='Enter details for this task'
                    buttonText='Add Card' />}
            <button onClick={handleAddTask}>
                <FontAwesomeIcon icon={faPlus} /><span>Add another card</span>
            </button>
        </Wrapper>
    )
}

export default Stage;