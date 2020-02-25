import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
    handleShowTextArea: any,
    handleSubmitTextArea: any,
    handleUpdateTextArea: any,
    handleOnKeyPress: any,
    placeholder: string,
    buttonText: string
}

const Wrapper = styled.div`
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

                &:hover{
                    cursor: default;
                }
            }
        }
    }
`

const TextArea: React.FunctionComponent<Partial<Props>> = ({
    handleShowTextArea,
    handleSubmitTextArea,
    handleUpdateTextArea,
    handleOnKeyPress,
    placeholder,
    buttonText
}) => {

    return (
        <Wrapper>
            <textarea
                placeholder={placeholder}
                onChange={handleUpdateTextArea}
                onKeyPress={handleOnKeyPress}
                autoFocus
            ></textarea>
            <div className='controls'>
                <div>
                    <button onClick={handleSubmitTextArea}>{buttonText}</button>
                    <FontAwesomeIcon icon={faPlus} onClick={handleShowTextArea} />
                </div>
                <span>...</span>
            </div>
        </Wrapper>
    )
};

export default TextArea;

