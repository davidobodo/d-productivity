import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

export const createTask = (task: string, title: string | undefined) => {
    console.log(title, task)
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

export const createSection = (payload: string) => ({
    type: CREATE_SECTION,
    payload
})