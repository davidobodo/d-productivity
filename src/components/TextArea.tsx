import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createTask } from '../store/actions';

interface Props {
    handleShowTextArea?: any
}

const Wrapper = styled.div<Props>`
    display: block;

    textarea{
        width: 100%;
        min-height: 5rem;
        color: #000000;
        background-color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        padding: 1rem 0.5rem 0.5rem 1rem;
        margin-bottom: 5px;
        border: none;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(9,30,66,.25);
        outline: none;
        cursor: pointer;

        ::placeholder{
            color: #000000;
            opacity: 0.2;
        }
    }

    .controls{
        display: flex;
        justify-content: space-between;

        div{

            button{
                background-color: green;
                color: #ffffff;
                border-radius: 3px;
                padding: 10px;
                width: auto;
                margin-right: 5px;
            }

            svg{
                transform: rotate(45deg);
            }
        }
    }
`

const TextArea: React.FunctionComponent<Props> = ({ handleShowTextArea }) => {
    const [taskDetails, setTaskDetails] = useState('');
    const dispatch = useDispatch();

    const handleSetTaskDetails = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDetails(event.target.value)
    }

    const handleSubmitTask = () => {
        dispatch(createTask(taskDetails));
        handleShowTextArea();
    }

    return (
        <Wrapper>
            <textarea placeholder="Enter a title for this card..." onChange={handleSetTaskDetails} autoFocus></textarea>
            <div className='controls'>
                <div>
                    <button onClick={handleSubmitTask}>Add Card</button>
                    <FontAwesomeIcon icon={faPlus} onClick={handleShowTextArea} />
                </div>
                <span>...</span>
            </div>
        </Wrapper>
    )
}

export default TextArea;

