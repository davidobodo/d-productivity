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
}

const List: React.FunctionComponent<Partial<Props>> = ({
    listTitle,
    tasks,
    listId,
    index,
    handleDragStartList,
    handleDragOverList
}) => {
    const [addTask, setAddTask] = useState(false);
    const [cardDetails, setCardDetails] = useState('');
    const dispatch = useDispatch();
    const allCards = useSelector((state: myState) => state.cards, shallowEqual)

    let dragTypeList: string;
    let dragTypeCard: string;
    let movedCardSourceIndex: number;
    let movedCardDestinationIndex: number;
    let movedCardId: any;
    let sourceListId: number | string;
    let destinationListId: number | string;


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

    const handleDragStartCard = (e: any, cardId: number | string, cardIndex: number): void => {
        e.target.style.opacity = "0.3";
        e.dataTransfer.setData("cardId", cardId);
        e.dataTransfer.setData("movedCardSourceIndex", cardIndex)
        e.dataTransfer.setData("sourceListId", listId);
        e.dataTransfer.dropEffect = 'move';
        e.dataTransfer.setData("dragTypeCard", "card");
    }

    const handleDragEnterCard = (e: any): void => {
        e.preventDefault();
    }

    const handleDragOverCard = (e: any, listId: number | string, cardIndex: number): void => {
        e.preventDefault();
        movedCardDestinationIndex = cardIndex;
        destinationListId = listId;
        e.dataTransfer.dropEffect = 'move';
    }

    const handleOnDragEndCard = (e: any): void => {
        e.preventDefault();
        console.log(e.target)
        e.target.style.opacity = '';
    }

    const handleOnDropCard = (e: any): void => {
        e.preventDefault();
        movedCardId = e.dataTransfer.getData("cardId");
        movedCardSourceIndex = e.dataTransfer.getData("movedCardSourceIndex");
        sourceListId = e.dataTransfer.getData("sourceListId");
        dragTypeList = e.dataTransfer.getData("dragTypeList");
        dragTypeCard = e.dataTransfer.getData("dragTypeCard");

        if (dragTypeCard == "") {
            return;
        }

        if (sourceListId === destinationListId) {
            const newStateArray = Object.values(allCards)

            const activeList = newStateArray.filter(card => card.listId === sourceListId);
            const remainingList = newStateArray.filter(card => card.listId !== sourceListId);

            const movedCard = activeList.splice(movedCardSourceIndex, 1);
            activeList.splice(movedCardDestinationIndex, 0, ...movedCard);
            remainingList.push(...activeList)

            const convertedArray = convertArrayToObject(remainingList, 'cardId');
            dispatch(sortCard(convertedArray))
        }

        if (sourceListId !== destinationListId) {
            const newStateArray = Object.values(allCards);
            allCards[movedCardId].listId = destinationListId;

            const activeList = newStateArray.filter(card => card.listId === destinationListId);
            const remainingList = newStateArray.filter(card => card.listId !== destinationListId);

            const handleGetIndex = (card: any) => {
                return card.cardId === movedCardId
            }

            const movedCardIndex = activeList.findIndex(handleGetIndex)
            const movedCard = activeList.splice(movedCardIndex, 1);
            activeList.splice(movedCardDestinationIndex, 0, ...movedCard);
            remainingList.push(...activeList)

            const convertedArray = convertArrayToObject(remainingList, 'cardId');
            dispatch(sortCard(convertedArray));
            handleOnDragEndCard(e);
        }

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
                    handleDragStartCard={(e: MouseEvent) => handleDragStartCard(e, cardId, i)}
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