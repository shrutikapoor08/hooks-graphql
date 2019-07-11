export default function reducer(state, action) {
    switch(action.type) {
        case "ADD_CONTENT":
            return {
                ...state,
                songs: action.payload
            }
            break;
        default:
            return state
    }
}