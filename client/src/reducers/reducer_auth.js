import { FETCH_USER, DELETE_COLLECTION, DELETE_GAME, DELETE_RECENT_GAMES, UPDATE_RECENT_GAMES, ADD_TO_GAME_COLLECTION, UPDATE_USER, DELETE_USER } from '../action/types';
import _ from 'lodash';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case UPDATE_USER:
            return {
                ...state,
                givenName: action.givenName,
                familyName: action.familyName
            }
        case DELETE_USER:
            return null;
        case UPDATE_RECENT_GAMES:
            let updateState = {
                ...state
            }
            if (updateState.recentGames.length >= 5) {
                updateState.recentGames.shift();
            }
            updateState.recentGames.push(action.payload);
            return updateState;
        case ADD_TO_GAME_COLLECTION: 
            let addGameState = {
                ...state
            };
            action.ids.forEach( id => {
                addGameState.collections.forEach(collection => {
                    if (id === collection._id) {
                        collection.gamesCollected.push(action.game);
                    }
                });
            });
            return addGameState;
        case DELETE_COLLECTION:
            let newData = {
                ...state
            };
            newData.collections = _.remove(newData.collections, function (collection) {
                return action.payload !== collection._id;
            });
            return newData;
        case DELETE_GAME:
            let gameData = {
                ...state
            };
            gameData.collections.forEach((collection) => {
                if( collection._id !== action.collection_id ) {
                    return;
                } else {
                    collection.gamesCollected = _.remove(collection.gamesCollected, function(game) {
                        return action.game_id !== game._id;
                    });
                }
            });
            return gameData;
        case DELETE_RECENT_GAMES:
            let newState = {
                ...state,
                recentGames: []
            }
            return newState;
        default:
            return state;
    }
}
