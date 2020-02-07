import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../store/actions';


interface Props {
    content: string | number,
    index: number,
    cardId: string | number,

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



const Card: React.FunctionComponent<Props> = ({ content, index, cardId }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteCard(cardId))
    }

    return (
        <Draggable draggableId={String(cardId)} index={index}>
            {provided => (
                <Wrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <span>{content}</span>
                    <FontAwesomeIcon icon={faPlus} onClick={handleDeleteTask} />
                </Wrapper>
            )}
        </Draggable>
    )
}

export default Card;