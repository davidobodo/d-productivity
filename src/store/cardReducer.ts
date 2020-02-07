import {
    CREATE_CARD,
    DELETE_CARD,
    DRAG_HAPPENED,

} from "./actionTypes";
import { Action } from "../utils/utils";

const initialState = {

}

export const cardReducer = (state = initialState, action: Action) => {
    const { type, cardId, cardDetails, listId, payload } = action;
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
        case DRAG_HAPPENED:
            return payload;
        default:
            return state;
    }
}