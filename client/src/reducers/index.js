import { combineReducers } from 'redux';
import authReducer from './reducer_auth';
import searchResults from './reducer_results';
import termReducer from './reducer_term';
import redirectReducer from './reducer_redirect';
import gameReducer from './reducer_game';
import collectionsReducer from './reducer_collections';
import collectionReducer from './reducer_collection';
import gameListReducer from './reducer_game_list';
import modal from './reducer_modal';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
    auth: authReducer,
    search_results: searchResults,
    term: termReducer,
    redirect: redirectReducer,
    selectedGame: gameReducer,
    gameList: gameListReducer,
    collections: collectionsReducer,
    collection: collectionReducer,
    modal: modal,
    user: userReducer
});

export default rootReducer;