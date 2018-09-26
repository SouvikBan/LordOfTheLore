import {combineReducers} from 'redux'

import GenresReducer from './genres.reducer'
import QuizzesReducer from './quizzes.reducer'

const rootReducer = combineReducers({
    Genres : GenresReducer,
    Quizzes: QuizzesReducer
});

export default rootReducer