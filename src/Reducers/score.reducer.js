export default function(state=0,action){
    switch(action.type){
        case "SHOW_SCORE":
            return action.payload
        default:
            return state
    }
}