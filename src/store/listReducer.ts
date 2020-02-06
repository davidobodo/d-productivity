import {
    CREATE_LIST,
    DELETE_LIST
} from "./actionTypes";
import { Action } from "../utils/utils";

const initialState = {

}

export const listReducer = (state = initialState, action: Action) => {
    const { type, listTitle, listId } = action;
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
        default:
            return state;
    }
}