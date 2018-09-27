import API from '../Commons/api'

export function fetchquestions(objectID){
    const request = API.get("/questions/"+objectID)

    return dispatch => {
        request.then(({data}) => {
            dispatch({
                type:'FETCH_ALL_QUESTIONS',
                payload: data
            });
        });
    };
}

export function addquestion(data,id){

    const request = API.post("/questions/",data)

    return dispatch => {
        request.then(({data}) => {
            dispatch(fetchquestions(id))
        });
    };
}

export function deletequestion(ID,id){
    const request = API.delete("/questions/"+ID)
    return dispatch => {
        request.then(({data}) =>{
            dispatch(fetchquestions(id))
        });
    }

}