import thunk from 'redux-thunk';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import movieReducer from './reducers';

const reducer = combineReducers({
    movie:movieReducer
})
const store = createStore(reducer,applyMiddleware(thunk))

export default store;