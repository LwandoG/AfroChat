import React, {useReducer}  from 'react';
import {v4} from 'uuid'
import AlertContext from './AlertContext';
import alertReducer from './AlertReducer'

import {REMOVE_ALERT, SET_ALERT} from '../../types';

const AlertState = props => {
    const initialState = [];
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (message) => {
        const id = v4();
        dispatch({ type: SET_ALERT, payload: {message, id} });

        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), 4000);

    };

    return(
        <AlertContext.Provider value={{alerts: state, setAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;