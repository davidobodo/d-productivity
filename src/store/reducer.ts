import { CREATE_TASK, DELETE_TASK, CREATE_SECTION, DRAG_HAPPENED } from "./actionTypes";
import { myState, convertArrayToObject, convertArrayToObject2 } from '../utils/utils';


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
                const movedStage = myStages.splice(droppableIndexStart, 1)
                myStages.splice(droppableIndexEnd, 0, ...movedStage)

                const convertedArray = convertArrayToObject2(myStages);
                return {
                    ...state,
                    titles: convertedArray
                }
            }
            if (droppableIdStart === droppableIdEnd) {
                const myArray = Object.values(state.tasks);
                const movedCard = myArray.splice(droppableIndexStart, 1);
                myArray.splice(droppableIndexEnd, 0, ...movedCard);

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




