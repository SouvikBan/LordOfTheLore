export default function(state=[],action){
    switch(action.type){
        case "FETCH_ALL_QUESTIONS":
        if(action.payload !== null)
            return action.payload
        else 
            return []
        default:
            return state
    }
}