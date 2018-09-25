import {combineReducers} from 'redux'

import GenresReducer from './genres.reducer'

const rootReducer = combineReducers({
    Genres : GenresReducer
});

export default rootReducer