import { CREATE_TASK, DELETE_TASK, CREATE_SECTION, DRAG_HAPPENED } from "./actionTypes";

export const createSection = (title: string, titleId: number | string) => {
    return {
        type: CREATE_SECTION,
        title,
        titleId
    }
}

export const createTask = (
    taskId: string | number,
    taskDetails: string | number,
    titleId: string | number | undefined
) => {
    return {
        type: CREATE_TASK,
        taskId,
        taskDetails,
        titleId
    }
}

export const deleteTask = (payload: string) => ({
    type: DELETE_TASK,
    payload
})

export const sortTasks = (
    droppableIdStart: any,
    droppableIdEnd: any,
    droppableIndexStart: any,
    droppableIndexEnd: any,
    draggableId: any
) => {
    return {
        type: DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}

