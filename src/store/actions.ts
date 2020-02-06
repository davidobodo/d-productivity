import {
    CREATE_CARD,
    DELETE_CARD,
    CREATE_LIST,
    DELETE_LIST,
    DRAG_HAPPENED
} from "./actionTypes";

export const createList = (listTitle: string, listId: number | string) => {
    return {
        type: CREATE_LIST,
        listTitle,
        listId
    }
}

export const deleteSection = (titleId: string | number | undefined) => ({
    type: DELETE_LIST,
    titleId
})

export const createTask = (
    taskId: string | number,
    taskDetails: string | number,
    titleId: string | number | undefined
) => {
    return {
        type: CREATE_CARD,
        taskId,
        taskDetails,
        titleId
    }
}

export const deleteTask = (taskId: string | number) => ({
    type: DELETE_CARD,
    taskId
})

export const sortTasks = (
    droppableIdStart: any,
    droppableIdEnd: any,
    droppableIndexStart: any,
    droppableIndexEnd: any,
    draggableId: any,
    type: any,
) => {
    return {
        type: DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type,
        }
    }
}

