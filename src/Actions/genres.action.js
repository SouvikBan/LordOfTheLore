import API from '../Commons/api'
import { fetchQuizzes } from './quizzes.action'

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

export const AddQuiz = (data,genre)=>{
    const request = API.post("/quizzes/",data)
    return dispatch => {
        request.then(({data})=>{
            dispatch(fetchAllGenres(),
            dispatch(fetchQuizzes(genre)))
        });
    }
}

export const DeleteQuiz = (quizID,genre )=>{
    const request = API.delete("/quizzes/"+quizID)
    return dispatch => {
        request.then(({data}) =>{
            dispatch(fetchAllGenres(),
            dispatch(fetchQuizzes(genre)))
        });
    }
}