import {FAILURE, LOGIN_REQUEST, SUCCESS} from './authType';

const initialState = {
    //isLoggedIn: ''
    users: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state
            }; 
        case SUCCESS:
            return{
                //isLoggedIn: action.payload
                users: action.payload,
                error: ''
            };
        case FAILURE:
            return{
                //isLoggedIn: action.payload
                users:[],
                error: action.payload
            };
        default:
            return state;
    }
};
export default reducer;