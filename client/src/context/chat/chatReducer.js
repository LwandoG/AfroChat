import {GET_CHAT, CLEAR_CHAT, SEND_MESSAGE} from '../../types'

export default (state, action) => {
    switch(action.query){
        case SEND_MESSAGE:
            return {
                ...state,
                messageList: {$push: action.payload}
            };
        case GET_CHAT:
            return {
                ...state,
                activeChat: action.payload
            }
        case CLEAR_CHAT:
                return {
                    ...state,
                    activeChat: null
                }
        default: 
           return null
    }
    
}