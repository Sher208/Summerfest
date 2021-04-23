import {AUTH} from '../constants/constant';
import {put, takeEvery, takeLeading, take} from 'redux-saga/effects';
import {success, fail} from '../utils/constAppend';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

function* loadUserSaga(){

    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = yield axios.get('/api/user');
        yield put({
            type: success(AUTH.USER_LOAD), 
            payload: res.data
        });
    }catch(err){
        console.log(err);
        yield put({
            type: fail(AUTH.USER_LOAD),
            payload: { msg: err.response.data.message, status: err.response.status },
          });
    }
}

export function* watchLoadUserSaga(){
    yield takeEvery(AUTH.USER_LOAD, loadUserSaga);
}

function* loginSaga(action){
    console.log('Loginnnnnnnnnnnnnnnnnnnnn');
    const config = {
        header:{
            'Content-Type': 'application/json'
        },
    };

    const body = action.payload;
    console.log(body)
    try{
        const res = yield axios.post('/api/auth/login',body, config);
        yield put({
            type: success(AUTH.LOGIN), 
            payload: res.data
        });
    }catch(err){
        console.error(err.response.data.message);
        yield put({
            type: fail(AUTH.LOGIN),
            payload: { msg: err.response.data.message, status: err.response.status },
          });
    }
}


export function* watchLoginSaga(){
    yield takeEvery(AUTH.LOGIN, loginSaga);
    // yield takeEvery(AUTH.USER_LOAD, loadUserSaga);
}


function* registerSaga(action){
    console.log('------------------------------------');
    const config = {
        header:{
            'Content-Type': 'application/json'
        },
    };

    const body = action.payload;
    console.log(body);
    try{
        const res = yield axios.post('/api/auth/register',body, config);
        yield put({
            type: success(AUTH.REGISTER), 
            payload: res.data
        });
    }catch(err){
        console.log(err.response.data.message);
        yield put({
            type: fail(AUTH.REGISTER),
            payload: { msg: err.response.data.message, status: err.response.status },
          });
    }
}



export function* watchRegisterSaga(){
    console.log('Helooooooooooooooooo');
    yield takeEvery(AUTH.REGISTER, registerSaga);
    // yield takeEvery(AUTH.USER_LOAD, loadUserSaga);
}

function* logoutSaga(){
    yield put({
        type: success(AUTH.LOGOUT), 
        payload: null
    });
}

export function* watchLogoutSaga(){
    yield takeEvery(AUTH.LOGOUT, logoutSaga);
}
