import {GET_CHAT, SEND_MESSAGE} from '../../types'

export default (state, action) => {
    switch(action.query){
        case SEND_MESSAGE:
            return {
                ...state,
                 
            };
        case GET_CHAT:
            return {
                ...state,
                activeChat: action.payload
            }
        case GET_CHAT:
                return {
                    ...state,
                    activeChat: null
                }
        default: 
           return null
    }
    
}