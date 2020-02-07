import {
    CREATE_CARD,
    DELETE_CARD,
    DRAG_HAPPENED_CARD,

} from "./actionTypes";
import { Action, cloneObject, myState } from "../utils/utils";

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
            const clonedState: any = cloneObject(state)
            delete clonedState[cardId];
            return clonedState;
        case DRAG_HAPPENED_CARD:
            return payload;
        default:
            return state;
    }
}