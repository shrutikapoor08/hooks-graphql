export default function reducer(state, action) {
    switch(action.type) {
        case "ADD_CONTENT":
            return {
                ...state,
                songs: state.songs.concat(action.payload)
    };
        default:
            return state
    }
}