import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
    show: boolean
}

const Wrapper = styled.div<Props>`
    display: ${props => (props.show ? "block" : "none")};

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

const TextArea: React.FunctionComponent<Props> = ({ show }) => {
    const [taskDetails, setTaskDetails] = useState('');

    const handleSetTaskDetails = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDetails(event.target.value)
    }

    const handleSubmitTask = () => {
        console.log(taskDetails)
    }

    return (
        <Wrapper show={show}>
            <textarea placeholder="Enter a title for this card..." onChange={handleSetTaskDetails}></textarea>
            <div className='controls'>
                <div>
                    <button onClick={handleSubmitTask}>Add Card</button>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>...</span>
            </div>
        </Wrapper>
    )
}

export default TextArea;

