import React, {useReducer}  from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer'
import axios from 'axios'

import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS} from '../../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    const registerUser = async userDetails => {
        const configuration = { headers: {'Content-Type': 'application/json'}}

        try {
            const res = await axios.post('/api/users', userDetails, configuration)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.message
            })
        }
    }

    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return(
        <AuthContext.Provider value={{token: state.token, isAuthenticated: state.isAuthenticated, loading: state.loading, user: state.user, error: state.error, registerUser, clearErrors}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;