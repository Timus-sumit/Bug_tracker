import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducers'
import usersReducer from '../reducers/usersReducer';
import projectReducer from '../reducers/projectReducer';
const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            auth:authReducer,
            users:usersReducer,
            projects:projectReducer
        }),
        applyMiddleware(thunk)
    )

    return store;
}

export default configureStore;