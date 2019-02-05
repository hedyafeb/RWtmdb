import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import movies from './reducers/movies'

const rootReducer = combineReducers({
    movies
})


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store