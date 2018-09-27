import {combineReducers} from 'redux'

import GenresReducer from './genres.reducer'
import QuizzesReducer from './quizzes.reducer'
import QuestionReducer from './questions.reducer'
import UsersReducer from './users.reducer'
import SessionsReducer from './session.reducer' 
import ScoreReducer from './score.reducer'

const rootReducer = combineReducers({
    Genres : GenresReducer,
    Quizzes: QuizzesReducer,
    Questions : QuestionReducer,
    Users: UsersReducer,
    Sessions:SessionsReducer,
    Score:ScoreReducer
});

export default rootReducer