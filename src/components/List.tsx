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

    const handleAddCard = () => {
        setAddTask(!addTask);
    }

    const handleSetTaskDetails = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCardDetails(event.target.value)
    }

    const handleSubmitCard = () => {
        const cardId = uuidv4()
        dispatch(createCard(cardId, cardDetails, listId));
        handleAddCard();
    }

    const handleDeleteList = () => {
        dispatch(deleteList(listId))
    }

    const {
        allCards
    } = useSelector((state: myState) => ({
        allCards: state.cards,
    }), shallowEqual);



    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        console.log('on drag over')
    }

    const handleDragEnter = () => {
    }

    const handleDragEnd = (e: any) => {
    }

    const handleOnDrop = (e: any) => {
        console.log('dropped');
        const movedCard = e.dataTransfer.getData("id");
        const sourceList = e.dataTransfer.getData("sourceListId");
    }



    return (

        <ListWrapper
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
        >
            <div className='List__title'>
                <span className='List__title__header'>{listTitle}</span>
                <FontAwesomeIcon icon={faPlus} onClick={handleDeleteList} />
            </div>
            {allCards && Object
                .values(allCards)
                .filter(task => listId === task.listId)
                .map(({ cardId, cardDetails, listId }, i) => <Card key={cardId} content={cardDetails} index={i} cardId={cardId} listId={listId} />)}
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