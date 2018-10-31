import { combineReducers } from 'redux';
import authReducer from './reducer_auth';
import searchResults from './reducer_results';
import termReducer from './reducer_term';
import redirectReducer from './reducer_redirect';
import gameReducer from './reducer_game';

const rootReducer = combineReducers({
    auth: authReducer,
    search_results: searchResults,
    term: termReducer,
    redirect: redirectReducer,
    selectedGame: gameReducer
});

export default rootReducer;