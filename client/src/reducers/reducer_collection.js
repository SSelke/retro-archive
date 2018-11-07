import { SET_SHOW_COLLECTION } from '../action/types';
import _ from 'lodash';

export default function (state = null, action) {
    switch (action.type) {
        case null:
            return state;
        case undefined:
            return state;
        case SET_SHOW_COLLECTION:
            return action.payload;
        default:
            return state;
    }
}