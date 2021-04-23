import {AUTH} from '../constants/constant';

export const loadUser = () => ({
    type: AUTH.USER_LOAD
});

export const register = (register) => {
    console.log('hellllllllllllllllllllllllllllllllllllll');
    return {type: AUTH.REGISTER, payload: register};
};

export const logout = () => {
    return{
        type: AUTH.LOGOUT
    }
};

export const login = (login) => {
    console.log('logoutttttttttttttttttttttttttttttttttttttt');
    return {
        type: AUTH.LOGIN, payload:login
    }
};