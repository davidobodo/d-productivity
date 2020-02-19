import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createCard, deleteList } from '../store/actions';
import { myState } from '../utils/utils';
import uuidv4 from 'uuid';

import Card from './Card';
import TextArea from './TextArea';
import { ListWrapper } from './ListStyles';

interface Props {
    listTitle: string,
    tasks: Array<string | number>,
    listId: string | number,
    index: number,
}

const List: React.FunctionComponent<Partial<Props>> = ({ listTitle, tasks, listId, index }) => {
    const [addTask, setAddTask] = useState(false);
    const [cardDetails, setCardDetails] = useState('');
    const dispatch = useDispatch();

    let destinationIndex: number;

    const handleAddCard = (): void => {
        setAddTask(!addTask);
    }

    const handleSetTaskDetails = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setCardDetails(event.target.value)
    }

    const handleSubmitCard = (): void => {
        const cardId = uuidv4()
        dispatch(createCard(cardId, cardDetails, listId));
        handleAddCard();
    }

    const handleDeleteList = (): void => {
        dispatch(deleteList(listId))
    }

    const {
        allCards
    } = useSelector((state: myState) => ({
        allCards: state.cards,
    }), shallowEqual);

    const handleDragStart = (e: any, cardId: number | string, cardIndex: number): void => {
        e.target.style.opacity = '0.3';
        e.dataTransfer.setData("id", cardId);
        e.dataTransfer.setData("movedCardSourceIndex", cardIndex)
        e.dataTransfer.setData("sourceListId", listId);
        e.dataTransfer.dropEffect = 'move';
    }

    const handleDragEnter = (e: any): void => {
        e.preventDefault();
    }

    const handleDragOverCard = (e: any, cardId: number | string, cardIndex: number): void => {
        e.preventDefault();
        destinationIndex = cardIndex;
        e.dataTransfer.dropEffect = 'move';
    }

    const handleOnDrop = (e: any): void => {
        e.preventDefault();
        console.log(destinationIndex)
        const movedCard = e.dataTransfer.getData("id");
        const movedCardSourceIndex = e.dataTransfer.getData("movedCardSourceIndex");
        const sourceList = e.dataTransfer.getData("sourceListId");
        const destination = e.dataTransfer.getData("destinationIndex")
    }

    const handleDragEnd = (e: any) => {
        e.preventDefault();
    }

    const handleDragLeave = () => {
    }

    return (

        <ListWrapper
            onDragEnter={handleDragEnter}
            // onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleOnDrop}
            onDragEnd={handleDragEnd}
        >
            <div className='List__title'>
                <span className='List__title__header'>{listTitle}</span>
                <FontAwesomeIcon icon={faPlus} onClick={handleDeleteList} />
            </div>
            {allCards && Object
                .values(allCards)
                .filter(task => listId === task.listId)
                .map(({ cardId, cardDetails, listId }, i) => <Card
                    key={cardId}
                    content={cardDetails}
                    cardIndex={i}
                    cardId={cardId}
                    listId={listId}
                    handleDragStart={(e: MouseEvent) => handleDragStart(e, cardId, i)}
                    handleDragOverCard={(e: MouseEvent) => handleDragOverCard(e, cardId, i)}
                />)}
            {addTask &&
                <TextArea
                    handleShowTextArea={handleAddCard}
                    handleSubmitTextArea={handleSubmitCard}
                    handleUpdateTextArea={handleSetTaskDetails}
                    placeholder='Enter details for this task'
                    buttonText='Add Card' />}
            <button onClick={handleAddCard} className='btn-add-task'>
                <FontAwesomeIcon icon={faPlus} /><span>Add another card</span>
            </button>
        </ListWrapper>

    )
};

export default List;