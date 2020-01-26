import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

export const createTask = (payload: string) => {
    return {
        type: CREATE_TASK,
        payload
    }
}

export const deleteTask = (payload: string) => ({
    type: DELETE_TASK,
    payload
})

export const createSection = (payload: string) => ({
    type: CREATE_SECTION,
    payload
})