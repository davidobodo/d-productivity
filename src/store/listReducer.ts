import {
    CREATE_LIST,
    DELETE_LIST,
    DRAG_HAPPENED_LIST,
} from "./actionTypes";
import { Action } from "../utils/utils";

const initialState = {

}

export const listReducer = (state = initialState, action: Action) => {
    const { type, listTitle, listId, payload } = action;
    switch (type) {
        case CREATE_LIST:
            return {
                ...state,
                [listId]: listTitle,
            };
        case DELETE_LIST:
            return {
                ...state
            };
        case DRAG_HAPPENED_LIST:
            return payload
        default:
            return state;
    }
}