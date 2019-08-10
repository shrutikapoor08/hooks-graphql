export default function reducer(state, action) {
    switch(action.type) {
        case "ADD_CONTENT":
            return {
                ...state,
                songs: [...new Set([...state.songs ,...action.payload])]
            };
        case "DELETE_CONTENT":
            //payload is an id.
            //remove song which has song. id
            console.log('...action.payload', action.payload)
            const newsongs = state.songs.filter(id => id !== action.payload.id)
            return {
                songs: newsongs
            };
        default:
            return state
    }
}