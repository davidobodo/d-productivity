import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";
import update from "immutability-helper";

interface Action {
    type: string,
    error: string,
    payload: string,
    task: string,
    title: string,
}

interface State {
    [key: string]: Array<string>
}

const initialState = {
};

const sampleState = {
    firstList: [
        'buy bread',
        'buy beans',
        'buy coke',
        'buy moi-moi',
        'buy apple'
    ],
    secondList: [
        'learn html',
        'learn css',
        'learn javascript',
        'learn react',
        'learn typescript'
    ]
}

export default (state: State = initialState, action: Action) => {
    const { type, error, task, title } = action;
    switch (type) {
        case CREATE_SECTION:
            return {
                ...state,
                [title]: [],
            }
        case CREATE_TASK:
            return {
                ...state,
                [title]: [...state[title], task]
                // [title]: update(title, { $push: [task] })
            };
        case DELETE_TASK:
            return {
                ...state,
            }
        default:
            return state;
    }
}