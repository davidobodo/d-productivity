import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createTask, deleteSection } from '../store/actions';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { myState } from '../utils/utils';
import uuidv4 from 'uuid';

import Card from './Card';
import TextArea from './TextArea';
import { ListWrapper } from './ListStyles';



interface Props {
    title: string,
    tasks: Array<string | number>,
    titleId: string | number,
    index: number,
}



const List: React.FunctionComponent<Partial<Props>> = ({ title, tasks, titleId, index }) => {
    const [addTask, setAddTask] = useState(false);
    const [taskDetails, setTaskDetails] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        setAddTask(!addTask);
    }

    const handleSetTaskDetails = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTaskDetails(event.target.value)
    }

    const handleSubmitTask = () => {
        const taskId = uuidv4()
        dispatch(createTask(taskId, taskDetails, titleId));
        handleAddTask();
    }

    const handleDeleteList = () => {
        dispatch(deleteSection(titleId))
    }

    const {
        allTasks
    } = useSelector((state: myState) => ({
        allTasks: state.tasks,
    }), shallowEqual)


    return (
        <Draggable draggableId={String(titleId)} index={index as number}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={String(titleId)} type="card">
                        {provided => (
                            <ListWrapper
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <div className='List__title'>
                                    <span className='List__title__header'>{title}</span>
                                    {/* <span className='List__title__options'>...</span> */}
                                    <FontAwesomeIcon icon={faPlus} onClick={handleDeleteList} />
                                </div>
                                {allTasks && Object
                                    .values(allTasks)
                                    .filter(task => titleId === task.titleId)
                                    .map(({ taskId, taskDetails }, i) => <Card key={taskId} content={taskDetails} index={i} taskId={taskId} />)}
                                {addTask &&
                                    <TextArea
                                        handleShowTextArea={handleAddTask}
                                        handleSubmitTextArea={handleSubmitTask}
                                        handleUpdateTextArea={handleSetTaskDetails}
                                        placeholder='Enter details for this task'
                                        buttonText='Add Card' />}
                                {provided.placeholder}
                                <button onClick={handleAddTask} className='btn-add-task'>
                                    <FontAwesomeIcon icon={faPlus} /><span>Add another card</span>
                                </button>
                            </ListWrapper>
                        )}
                    </Droppable>
                </div>
            )}


        </Draggable>
    )
}

export default List;