import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

export const createSection = (title: string) => ({
    type: CREATE_SECTION,
    title
})

export const createTask = (task: string, title: string | undefined) => {
    return {
        type: CREATE_TASK,
        task,
        title
    }
}

export const deleteTask = (payload: string) => ({
    type: DELETE_TASK,
    payload
})

