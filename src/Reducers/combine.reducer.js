import {combineReducers} from 'redux'

import GenresReducer from './genres.reducer'
import QuizzesReducer from './quizzes.reducer'
import QuestionReducer from './questions.reducer'
import UsersReducer from './users.reducer'
import SessionsReducer from './session.reducer' 

const rootReducer = combineReducers({
    Genres : GenresReducer,
    Quizzes: QuizzesReducer,
    Questions : QuestionReducer,
    Users: UsersReducer,
    Sessions:SessionsReducer
});

export default rootReducer