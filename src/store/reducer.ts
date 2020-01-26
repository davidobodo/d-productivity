import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

interface Action {
    type: string,
    error: string,
    payload: string,
    task: string,
    title: string,
}

const initialState = {
};

export default (state = initialState, action: Action) => {
    console.log(action)
    const { type, error, payload, task, title } = action;
    switch (type) {
        case CREATE_TASK:
            return {
                ...state,
            };
        case DELETE_TASK:
            return {
                ...state,
            }
        case CREATE_SECTION:
            return {
                ...state,
                [payload]: ''
            }
        default:
            return state;
    }
}