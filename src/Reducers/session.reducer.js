export default function(state={
    "ID":null,
    "name":" ",
    "email":" ",
    "password":" ",
    "admin":false,
    "isAuthenticated":false
},action){
    switch(action.type){
        case "USER_LOGGED_IN":
            state.ID=action.payload.ID
            state.name=action.payload.name
            state.email=action.payload.email
            state.password=action.payload.password
            state.isAuthenticated=true
            state.admin=action.payload.admin
            return state
        case "USER_LOGGED_OUT":
            state.name=" "
            state.email=" "
            state.password=" "
            state.admin=false
            state.isAuthenticated=false
            return state
        default:
            return state
    }
}