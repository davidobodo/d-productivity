import {
    CREATE_CARD,
    DELETE_CARD,
} from "./actionTypes";
import { Action } from "../utils/utils";

const initialState = {

}

export const cardReducer = (state = initialState, action: Action) => {
    const { type } = action;
    switch (type) {
        case CREATE_CARD:
            return {
                ...state,
            };
        case DELETE_CARD:
            return {
                ...state,
            };
        default:
            return state;
    }
}