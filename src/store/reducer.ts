import { CREATE_TASK } from "./actionTypes";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

interface TaskType {
    tasks: string[]
}

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
        default:
            return state;
    }
}