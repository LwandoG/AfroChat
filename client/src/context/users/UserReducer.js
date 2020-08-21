import { GET_USERS } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
        };
      
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case CONTACT_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }