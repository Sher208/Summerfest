import {success, fail} from '../utils/constAppend';
import { AUTH } from '../constants/constant';
import Cookies from 'js-cookie';

const initialState = {
    token: Cookies.get('token'),
    isAuthenticated: false,
    loading: true,
    isRegistered: false,
    user: null,
    error: null,
}

const authReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case AUTH.LOGOUT:
        case AUTH.USER_LOAD:
        case AUTH.LOGIN:
        case AUTH.REGISTER:
            return {
                ...state,
                loading: true
            };
        case success(AUTH.USER_LOAD):
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                isRegistered: true,
                user: payload,
                error: null,
            }
        case success(AUTH.REGISTER):
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                isRegistered: true,
                user: null,
                error: null,
            };
        case success(AUTH.LOGIN):
            Cookies.set('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isRegistered: true,
                loading: false,
                error: null,
            };
        case fail(AUTH.USER_LOAD):
        case fail(AUTH.LOGIN):
        case fail(AUTH.REGISTER):
            Cookies.remove('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                isRegistered: false,
                user: null,
                error: payload,
            };
        case success(AUTH.LOGOUT):
            Cookies.remove('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isRegistered: false,
                loading: false,
                user: null,
                error: null,
            };
        default:
            return state
    }
};

export default authReducer;