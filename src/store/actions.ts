import { CREATE_TASK, DELETE_TASK } from "./actionTypes";

export const createTask = (payload: string) => {
    return {
        type: 'CREATE_TASK',
        payload
    }
}

export const deleteTask = (payload: string) => ({
    type: 'DELETE_TASK',
    payload
})