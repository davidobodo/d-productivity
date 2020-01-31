import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

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

