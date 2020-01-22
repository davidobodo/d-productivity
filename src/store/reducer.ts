const initialState = {


};

interface Action {
    type: string,
    error: string,
    payload: string,
}

export default (state = initialState, action: Action) => {
    const { type, error, payload } = action;
    switch (type) {
        case "ADD_TASK":
            return {

            };
        default:
            return state;
    }
}