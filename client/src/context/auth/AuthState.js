import React, {useReducer}  from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer'
import axios from 'axios'
import setAuthToken from '../../Token'

import {REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS} from '../../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    const loadUser = async () => {
        setAuthToken(localStorage.token);
    
        try {
          const res = await axios.get('/api/auth');
    
          dispatch({
            type: LOAD_USER, payload: res.data});
        } catch (err) {
          dispatch({ type: AUTH_ERROR })
        }
      };

    const registerUser = async userDetails => {
        const configuration = { headers: {'Content-Type': 'application/json'}}

        try {
            const res = await axios.post('/api/users', userDetails, configuration)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            loadUser();
        } catch (error) {
            //console.log(error)
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.message
            })
        }
    }

    const loginUser = async userDetails => {
        const configuration = { headers: {'Content-Type': 'application/json'}}

        try {
            const res = await axios.post('/api/auth', userDetails, configuration)

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            loadUser();
        } catch (error) {
            //console.log(error)
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.message
            })
        }
    }

    const clearError = () => dispatch({ type: CLEAR_ERRORS });

    const logout = () => dispatch({ type: LOGOUT})

    return(
        <AuthContext.Provider value={{token: state.token, isAuthenticated: state.isAuthenticated, 
        loading: state.loading, user: state.user, error: state.error, registerUser, loginUser, clearError, loadUser, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;