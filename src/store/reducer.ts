import { CREATE_TASK, DELETE_TASK, CREATE_SECTION, DRAG_HAPPENED } from "./actionTypes";
import { myState } from '../utils/interfaces'

interface Action {
    type: string,
    error: string,
    payload: any,
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
        case DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;
            if (droppableIdStart === droppableIdEnd) {
                // const list = state.titles[droppableIdStart]
                // const activeList = Object.values(state.tasks).filter((task, i) => {
                //     return task.titleId === droppableIdStart;
                // })
                const myArray = Object.values(state.tasks);
                const movedCard = myArray.splice(droppableIndexStart, 1);
                myArray.splice(droppableIndexEnd, 0, ...movedCard);

                const convertArrayToObject = (array: any, key: string) => {
                    const initialValue = {};
                    return array.reduce((obj: any, item: any) => {
                        return {
                            ...obj,
                            [item[key]]: item,
                        };
                    }, initialValue)
                }
                const convertedArray = convertArrayToObject(myArray, 'taskId');
                return {
                    ...state,
                    tasks: convertedArray
                }
            }

            if (droppableIdStart !== droppableIdEnd) {
                const myArray = Object.values(state.tasks);
                const movedCard = myArray.splice(droppableIndexStart, 1);
                movedCard[0].titleId = droppableIdEnd;
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


