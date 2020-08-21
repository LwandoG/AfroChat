import React, { useReducer } from 'react'
import { GET_USERS, USERS_ERROR, SET_CURRENT, CLEAR_CURRENT } from '../types';
import axios from 'axios'
import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = props => {
    const initialState = {
        users: null,
        current: null,
        error: null
      };
      const [state, dispatch] = useReducer(UserReducer, initialState);

      const getUsers = async () => {

        try {
            const res = await axios.get('/api/users')
            dispatch({ query: GET_USERS, payload: res.data})
        } catch (err) {
            console.error(err)
            dispatch({query: USERS_ERROR, payload: err.response.message})
        }
      
  }

  const setCurrent = user => {
    dispatch({ type: SET_CURRENT, payload: user });
  };

  const clearCurrent = user => {
    dispatch({ type: CLEAR_CURRENT });
  };
    return (
        <UserContext.Provider value={{
            users: state.users,
            current: state.current,
            error: state.error,
            getUsers,
            setCurrent,
            clearCurrent
          }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
