import { CREATE_TASK, DELETE_TASK, CREATE_SECTION } from "./actionTypes";
import { myState } from '../utils/interfaces'

interface Action {
    type: string,
    error: string,
    payload: string,
    title: string,
    taskId: string | number,
    taskDetails: string | number,
    titleId: string | number
}


const initialState: myState = {
    titles: {},
    tasks: {},
};

const reducer = (state = initialState, action: Action) => {
    const { type, error, taskId, title, titleId, taskDetails } = action;
    switch (type) {
        case CREATE_SECTION:
            return {
                ...state,
                titles: {
                    ...state.titles,
                    [titleId]: title
                },
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [taskId]: {
                        taskId,
                        taskDetails,
                        titleId
                    }
                }
            };
        case DELETE_TASK:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;


// interface State2 {
//     [key: string]: {
//         [key: number]: {
//             [key: string]: number | string
//         }
//     }
// }


