import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../store/actions';
import CardPlaceholder from './placeholders/cardPlaceholder'


interface Props {
    content: string | number,
    cardIndex: number,
    cardId: string | number,
    listId: string | number,
    handleDragStartCard: any,
    handleDragOverCard: any,

}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 5rem;
    color: #000000;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    padding: 1rem 0.5rem 0.5rem 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    outline: none;
    cursor: pointer;

    svg{
        opacity: 0.2;
        transform: rotate(45deg);

        &:hover{
            cursor: default;
        }
    }
`



const Card: React.FunctionComponent<Props> = ({
    content,
    cardIndex,
    cardId,
    listId,
    handleDragStartCard,
    handleDragOverCard
}) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteCard(cardId))
    }



    return (
        <>
            <CardPlaceholder />
            <Wrapper draggable onDragStart={handleDragStartCard} onDragOver={handleDragOverCard}>
                <span>{content}</span>
                <FontAwesomeIcon icon={faPlus} onClick={handleDeleteTask} />
            </Wrapper>
        </>
    )
}

export default Card;