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
                draggableId,
                type
            } = action.payload;
            if (type === "list") {
                const myStages = Object.entries(state.titles)
                console.log(myStages)
                const movedStage = myStages.splice(draggableId, 1)
                myStages.splice(droppableIndexEnd, 0, ...movedStage)
                console.log(myStages)
                // console.log(movedStage)

                const convertArrayToObject = (array: any) => {
                    const initialValue = {};
                    return array.reduce((obj: any, item: any) => {
                        return {
                            ...obj,
                            [item[0]]: item[1],
                        };
                    }, initialValue)
                }
                const convertedArray = convertArrayToObject(myStages);
                return {
                    ...state,
                    titles: convertedArray
                }
            }
            if (droppableIdStart === droppableIdEnd) {
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


        default:
            return state;
    }
}

export default reducer;




