import { CREATE_TASK } from "./actionTypes";

export const createTask = (payload: string) => {
    return {
        type: 'CREATE_TASK',
        payload
    }
}