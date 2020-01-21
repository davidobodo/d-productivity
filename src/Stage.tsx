import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Card from './Card';

const Wrapper = styled.div`
    width: 300px;
    color: #000000;
    background-color: #ECECF0;
    padding: 2rem 1rem 1rem;
    border-radius: 3px;

    .stage__title{
        display: flex;
        justify-content: space-between;
        height: 2rem;
        align-items: center;
        margin-bottom: 1rem;

        &__options{
            font-size: 2.5rem;
            padding-bottom: 1rem;
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
            <button>
                <span></span>
                <FontAwesomeIcon icon={faPlus} />Add a card
            </button>
        </Wrapper>
    )
}

export default Stage