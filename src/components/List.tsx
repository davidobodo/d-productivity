import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createCard, deleteList } from '../store/actions';
import { myState, convertArrayToObject } from '../utils/utils';
import uuidv4 from 'uuid';
import { sortCard } from '../store/actions'
import Card from './Card';
import TextArea from './TextArea';
import { ListWrapper } from './ListStyles';

interface Props {
    listTitle: string,
    tasks: Array<string | number>,
    listId: string | number,
    index: number,
    handleDragStartList: any,
    handleDragOverList: any,
    handleDragEnterCard: any,
    handleOnDropCard: any,
    handleOnDragEndCard: any,
    handleDragStartCard: any,
    handleDragOverCard: any,
}

const List: React.FunctionComponent<Partial<Props>> = ({
    listTitle,
    tasks,
    listId,
    index,
    handleDragStartList,
    handleDragOverList,
    handleDragEnterCard,
    handleOnDropCard,
    handleOnDragEndCard,
    handleDragStartCard,
    handleDragOverCard,
}) => {
    const [addTask, setAddTask] = useState(false);
    const [cardDetails, setCardDetails] = useState('');
    const dispatch = useDispatch();
    const allCards = useSelector((state: myState) => state.cards, shallowEqual)

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

    return (
        <ListWrapper
            onDragEnter={handleDragEnterCard}
            onDrop={handleOnDropCard}
            draggable
            onDragEnd={handleOnDragEndCard}
            onDragStart={handleDragStartList}
            onDragOver={handleDragOverList}
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
                    handleDragStartCard={(e: MouseEvent) => handleDragStartCard(e, cardId, i, listId)}
                    handleDragOverCard={(e: MouseEvent) => handleDragOverCard(e, listId, i)}
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