import {
    CREATE_CARD,
    DELETE_CARD,
} from "./actionTypes";
import { Action } from "../utils/utils";

const initialState = {

}

export const cardReducer = (state = initialState, action: Action) => {
    const { type, cardId, cardDetails, listId } = action;
    switch (type) {
        case CREATE_CARD:
            return {
                ...state,
                [cardId]: {
                    cardId,
                    cardDetails,
                    listId
                }
            };
        case DELETE_CARD:
            return {
                ...state,
            };
        default:
            return state;
    }
}