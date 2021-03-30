import {combineReducers} from 'redux';
import competitionReducer from './competitionReducer';

export default combineReducers({
    getCompetition: competitionReducer
});