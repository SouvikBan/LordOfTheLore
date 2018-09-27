export function createscore(data){
    const request = API.post("/scores/",data)
    return dispatch => {
        request.then(({data})=>{
            dispatch(getuserdetails())
        });
    }
}