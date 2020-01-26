import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

interface Action {
    type: string,
    error: string,
    payload: string,
}

const initialState = {
};

export default (state = initialState, action: Action) => {
    const { type, error, payload } = action;
    switch (type) {
        case CREATE_TASK:
            return {
                ...state,
                [payload]: payload
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