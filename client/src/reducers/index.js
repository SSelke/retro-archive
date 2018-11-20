import { combineReducers } from 'redux';
import authReducer from './reducer_auth';
import searchResults from './reducer_results';
import termReducer from './reducer_term';
import redirectReducer from './reducer_redirect';
import gameReducer from './reducer_game';
import collectionReducer from './reducer_collection';
import gameListReducer from './reducer_game_list';
import userReducer from './reducer_user';
import modal from './reducer_modal';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    search_results: searchResults,
    term: termReducer,
    redirect: redirectReducer,
    selectedGame: gameReducer,
    gameList: gameListReducer,
    collection: collectionReducer,
    modal: modal
});

export default rootReducer;