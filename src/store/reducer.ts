import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";

interface Action {
    type: string,
    error: string,
    payload: string,
    task: string,
    title: string,
    id: number | string
}

interface State {
    [key: string]: {
        [key: number]: {
            [key: string]: number | string
        }
    }
}

// interface State2 {
//     titles: {
//         [key: number]: string
//     },
//     tasks: {
//         [key: number] : {
//             [key: string] : number | string
//         }
//     }
// }

const initialState = {
};

export default (state: State = initialState, action: Action) => {
    const { type, error, task, title, id } = action;
    switch (type) {
        case CREATE_SECTION:
            return {
                ...state,
                titles: {
                    ...state.titles,
                    [id]: title
                },
            }
        case CREATE_TASK:
            return {
                ...state,
                // [title]: [...state[title], task]
            };
        case DELETE_TASK:
            return {
                ...state,
            }
        default:
            return state;
    }
}