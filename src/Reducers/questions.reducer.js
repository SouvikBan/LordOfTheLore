export default function(state=null,action){
    switch(action.type){
        case "FETCH_ALL_QUESTIONS":
            return action.payload
        default:
            return state
    }
}