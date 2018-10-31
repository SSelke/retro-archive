import { FETCH_RESULTS } from '../action/types';
import _ from 'lodash';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            let results = action.payload;
            if (_.isEmpty(action.payload)) {
                results = _.orderBy(action.payload, 'first_release_date', 'desc')
                results = _.mapKeys(results, 'id');
            }
            return results;
        default:
            return state;
    }
}