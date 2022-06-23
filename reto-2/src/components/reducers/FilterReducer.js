import { VISIBILITY_FILTER } from "../Constants";
import { SET_FILTER } from '../actions/types';

const initialState = VISIBILITY_FILTER.ALL;

const FilterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILTER: {
            return action.payload.filter
        }
        default: {
            return state
        }
    }
}

export default FilterReducer;
