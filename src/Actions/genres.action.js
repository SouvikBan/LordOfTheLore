import API from '../Commons/api'

export function fetchAllGenres(){
    const request = API.get(`/genres/`);

    return dispatch => {
        request.then(({data}) => {
            dispatch({
                type:'FETCH_ALL_GENRES',
                payload: data
            });
        });
    };
}

