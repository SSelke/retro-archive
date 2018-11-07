import { FETCH_COLLECTIONS } from '../action/types';
import _ from 'lodash';

export default function( state = null, action ) {
    switch (action.type) {
        case null:
            return state;
        case undefined:
            return state;
        case FETCH_COLLECTIONS:
            let results = action.payload;
            results = _.mapKeys(results, "_id");
            return results;
        default: 
            return state;
    }
}