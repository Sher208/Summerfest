import {COMPETITION} from '../constants/constant';
import {put, takeEvery} from 'redux-saga/effects';
import {success, fail} from '../utils/constAppend';
import axios from 'axios';

function* getAllCompetitionSaga(){
    try{
        const res = yield axios.get('http://localhost:5000/api/competition/');
        yield put({
            type: success(COMPETITION.LOAD), 
            payload: res.data
        });
    }catch(err){
        yield put({
            type: COMPETITION.LOAD_FAIL,
            payload: { msg: err.response.data.msg, status: err.response.status },
          });
    }
}

function* getSingleCompetitionSaga(action){
    console.log(action);
    const id = action.payload;
    try{
        const res = yield axios.get(`http://localhost:5000/api/competition/${id}`);
        yield put({
            type: success(COMPETITION.GET_ONE_COMPETITION), 
            payload: res.data
        });
    }catch(err){
        yield put({
            type:fail(COMPETITION.GET_ONE_COMPETITION),
            payload: { msg: err.response.data.msg, status: err.response.status },
          });
    }
}

function* resetCompetition(){
    yield put({
        type: success(COMPETITION.RESET_COMPETITION), 
        payload: null
    });
}

function* resetError(){
    yield put({
        type: success(COMPETITION.RESET_ERROR), 
        payload: null
    });
}

export function* watchGetAllCompetition(){
    yield takeEvery(COMPETITION.LOAD, getAllCompetitionSaga);
}

export function* watchGetSingleCompetition(){
    yield takeEvery(COMPETITION.GET_ONE_COMPETITION, getSingleCompetitionSaga);
}

export function* watchResetCompetition(){
    yield takeEvery(COMPETITION.RESET_COMPETITION, resetCompetition);
}

export function* watchResetError(){
    yield takeEvery(COMPETITION.RESET_ERROR, resetError);
}