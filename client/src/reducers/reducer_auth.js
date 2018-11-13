import { FETCH_USER, DELETE_COLLECTION, DELETE_GAME } from '../action/types';
import _ from 'lodash';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
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
        default:
            return state;
    }
}
