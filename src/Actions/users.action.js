import API from '../Commons/api'

export function getuserdetails(){
    const request = API.get("/users/")

    return dispatch => {
        request.then(({data}) => {
            dispatch({
                type:'GET_ALL_USERS',
                payload: data
            });
        });
    };
}

export function createuser(data){
    const request = API.post("/users/",data)
    return dispatch => {
        request.then(({data})=>{
            dispatch(getuserdetails())
        });
    }
}

export function deleteuser(userID){
    const request = API.delete("/users/"+userID)
    return dispatch => {
        request.then(({data}) =>{
            dispatch(getuserdetails())
        });
    }
}
