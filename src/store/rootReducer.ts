import { combineReducers } from 'redux';
import { listReducer } from './listReducer';
import { cardReducer } from './cardReducer'

export const rootReducer = combineReducers({
    lists: listReducer,
    cards: cardReducer,
});