import {success, fail} from '../utils/constAppend';
import { AUTH } from '../constants/constant';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
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
                user: payload,
                error: null,
            }
        case success(AUTH.REGISTER):
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: null,
            };
        case success(AUTH.LOGIN):
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                error: null,
            };
        case fail(AUTH.USER_LOAD):
        case fail(AUTH.LOGIN):
        case fail(AUTH.REGISTER):
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: payload,
            };
        case success(AUTH.LOGOUT):
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: null,
            };
        default:
            return state
    }
};

export default authReducer;