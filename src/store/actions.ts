import {
    CREATE_CARD,
    DELETE_CARD,
    CREATE_LIST,
    DELETE_LIST,
    DRAG_HAPPENED_CARD,
    DRAG_HAPPENED_LIST,
} from "./actionTypes";

export const createList = (listTitle: string, listId: number | string) => {
    return {
        type: CREATE_LIST,
        listTitle,
        listId
    }
}

export const deleteSection = (titleId: string | number | undefined) => ({
    type: DELETE_LIST,
    titleId
})

export const createCard = (
    cardId: string | number,
    cardDetails: string | number,
    listId: string | number | undefined
) => {
    return {
        type: CREATE_CARD,
        cardId,
        cardDetails,
        listId
    }
}

export const deleteCard = (cardId: string | number) => ({
    type: DELETE_CARD,
    cardId
})

export const sortCard = (payload?: any) => {
    return {
        type: DRAG_HAPPENED_CARD,
        payload
    }
}

export const sortList = (payload?: any) => {
    return {
        type: DRAG_HAPPENED_LIST,
        payload
    }
}

