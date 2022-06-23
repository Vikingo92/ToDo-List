import { combineReducers, createStore } from 'redux';
import reducer  from '../reducers/Reducer';
import FilterReducer from '../reducers/FilterReducer';

export  default combineReducers({
    reducer, 
    FilterReducer
})


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)