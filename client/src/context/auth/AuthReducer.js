import { REGISTER_SUCCESS,REGISTER_FAIL,LOAD_USER,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,CLEAR_ERRORS} from '../../types';

export default (state, action) => {
    switch(action.query){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return { ...state, ...action.payload, isAuthenticated: true, loading: false };

        case AUTH_ERROR:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
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