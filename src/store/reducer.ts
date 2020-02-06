import {
    CREATE_CARD,
    DELETE_CARD,
    CREATE_LIST,
    DRAG_HAPPENED,
    DELETE_LIST
} from "./actionTypes";
import {
    myState,
    convertArrayToObject,
    convertArrayToObject2,
    cloneObject,
    Action
} from '../utils/utils';




const initialState: myState = {
    titles: {},
    tasks: {},
};

const reducer = (state = initialState, action: Action) => {
    const { type, taskId, title, titleId, taskDetails } = action;
    switch (type) {
        case CREATE_LIST:
            return {
                ...state,
                titles: {
                    ...state.titles,
                    [titleId]: title
                },
            }
        case CREATE_CARD:
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
        case DELETE_CARD:
            const clonedState = cloneObject(state);
            delete clonedState.tasks[taskId as number];
            return clonedState;
        case DELETE_LIST:
            const clonedState2 = cloneObject(state);
            delete clonedState2.titles[titleId as number];
            return clonedState2;
        case DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                type
            } = action.payload;
            if (type === "list") {
                const myLists = Object.entries(state.titles)
                const movedList = myLists.splice(droppableIndexStart, 1)
                myLists.splice(droppableIndexEnd, 0, ...movedList)

                const convertedArray = convertArrayToObject2(myLists);
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




