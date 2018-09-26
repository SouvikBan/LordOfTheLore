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

