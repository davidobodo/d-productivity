import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { createTask } from '../store/actions';
import { Droppable } from 'react-beautiful-dnd';
import { myState } from '../utils/interfaces';
import uuidv4 from 'uuid';

import Card from './Card';
import TextArea from './TextArea';
import { StageWrapper } from './StageStyles';



interface Props {
    title: string,
    tasks: Array<string | number>,
    titleId: string | number,
}



const Stage: React.FunctionComponent<Partial<Props>> = ({ title, tasks, titleId }) => {
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

    const {
        allTasks
    } = useSelector((state: myState) => ({
        allTasks: state.tasks,
    }), shallowEqual)
    console.log(titleId)

    return (
        <Droppable droppableId={String(titleId)}>
            {provided => (
                <StageWrapper
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div className='stage__title'>
                        <span className='stage__title__header'>{title}</span>
                        <span className='stage__title__options'>...</span>
                    </div>
                    {allTasks && Object.values(allTasks).map((task, i) => {
                        const { taskId, taskDetails } = task
                        if (titleId === task.titleId) {
                            return <Card key={taskId} content={taskDetails} index={i} taskId={taskId} />
                        }
                    })}
                    {addTask &&
                        <TextArea
                            handleShowTextArea={handleAddTask}
                            handleSubmitTextArea={handleSubmitTask}
                            handleUpdateTextArea={handleSetTaskDetails}
                            placeholder='Enter details for this task'
                            buttonText='Add Card' />}
                    <button onClick={handleAddTask} className='btn-add-task'>
                        <FontAwesomeIcon icon={faPlus} /><span>Add another card</span>
                    </button>
                    {provided.placeholder}
                </StageWrapper>
            )}
        </Droppable>
    )
}

export default Stage;