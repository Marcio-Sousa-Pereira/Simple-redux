import { createStore, combineReducers } from 'redux';
import reducerAddCurse from './reducers/registerCurses';

const rootreducers = combineReducers({reducerAddCurse});

const store = createStore(rootreducers);

export default store;