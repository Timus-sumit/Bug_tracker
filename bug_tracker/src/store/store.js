import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducers'
import usersReducer from '../reducers/usersReducer';
import projectReducer from '../reducers/projectReducer';
import ticketReducer from '../reducers/ticketReducers';
import filterReducer from '../reducers/filterReducers';
const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            auth:authReducer,
            users:usersReducer,
            projects:projectReducer,
            tickets:ticketReducer,
            filter:filterReducer
        }),
        applyMiddleware(thunk)
    )

    return store;
}

export default configureStore;