import { REGISTER_SUCCESS,REGISTER_FAIL,LOAD_USER,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,CLEAR_ERRORS} from '../../types';

export default (state, action) => {
    switch(action.query){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            //console.log(action.payload)
            localStorage.setItem('token', action.payload.token);
            return { ...state, ...action.payload, isAuthenticated: true, loading: false };

        case LOGOUT:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };

        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };

        case CLEAR_ERRORS:
            return {...state, error: null}
        
        default: 
           return state
    }
    
}