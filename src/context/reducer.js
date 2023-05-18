export const reducer = (state, action) => {
    switch (action.type) {
        case "addPhoto":
            return {
                ...state,
                photos: action.payload
            };
        default: return state
    }
}