import {combineReducers} from 'redux';
import competitionReducer from './competitionReducer';
import authReducer from './authReducer';

export default combineReducers({
    getCompetition: competitionReducer,
    getAuth: authReducer
});