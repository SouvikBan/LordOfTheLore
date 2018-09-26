export const ChangeSessionData = user => {
    return {
        type:"USER_LOGGED_IN",
        payload: user
    }
}

export const DeleteSessionData = _ =>{
    return {
        type:"USER_LOGGED_OUT",
        payload: null
    }
}