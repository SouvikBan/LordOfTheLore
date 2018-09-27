import API from '../Commons/api'

export function getscores(){
    const request = API.get(`/scores/`);

    return dispatch => {
        request.then(({data}) => {
            dispatch({
                type:'FETCH_ALL_SCORES',
                payload: data
            });
        });
    };
}
export function createscore(data){
    const request = API.post("/scores/",data)
    return dispatch => {
        request.then(({data})=>{
        });
    }
}