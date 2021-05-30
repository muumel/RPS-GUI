import UserService from '../UserService';
import {FAILURE, LOGIN_REQUEST, SUCCESS} from './authType';

export const authenticateUser = (emailLogin, passwordLogin) => {
    return dispatch => {
        dispatch(loginRequest());
        
        /*if(emailLogin === "test@hotmail.com" && passwordLogin === "test"){
            console.log(success());
            dispatch(success());
        }else{
            console.log(failure());
            dispatch(failure());
        }*/
        UserService.getUserByEmailAndPassword(emailLogin, passwordLogin).then(response =>{
            let dat = {
                ...response.data,
                verify: true
            };
            dispatch(success(dat));
        }).catch(error => {
            let dat = {
                ...error.message,
                verify: false
            };
            dispatch(failure(dat));
        })
    }
};

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const success = users => {
    return {
        type: SUCCESS,
        payload: users
    };
};

const failure = error => {
    return {
        type: FAILURE,
        payload: error
    };
};

