import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Card from './Card';
import Textarea from './TextArea';

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

        svg{
            margin-right: 10px;
        }
    }
`

const Stage = () => {
    return (
        <Wrapper>
            <div className='stage__title'>
                <span className='stage__title__header'>Title</span>
                <span className='stage__title__options'>...</span>
            </div>
            <Card />
            <Textarea />
            <button>
                <FontAwesomeIcon icon={faPlus} /><span>Add another card</span>
            </button>
        </Wrapper>
    )
}

export default Stage;