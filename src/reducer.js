export default function reducer(state, action) {
    switch(action.type) {
        case "ADD_CONTENT":
            return {
                ...state,
                songs: [...new Set([...state.songs ,...action.payload])]
            };
        default:
            return state
    }
}