import { FETCH_GAME_LIST, ADD_TO_GAME_LIST } from '../action/types';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_GAME_LIST:
            let list = action.payload;
            list = _.orderBy(action.payload, 'name', 'asc');
            return list;
        case ADD_TO_GAME_LIST:
            let addition = action.payload;
            addition = _.orderBy(action.payload, 'name', 'asc');
            return [...state, ...addition];
        default:
            return state;
    }
}
