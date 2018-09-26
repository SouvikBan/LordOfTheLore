export default function(state=[],action){
    switch(action.type){
        case "GENRE_SELECTED":
            return action.payload
        default:
            return state
    }
}