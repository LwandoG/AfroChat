import {GET_CHAT, GET_CHATS, CLEAR_CHAT, SEND_MESSAGE, SEARCH_CHATS, CHAT_ERROR} from '../../types'

export default (state, action) => {
    switch(action.query){
        case SEND_MESSAGE:
            return {
                ...state,
                messageList: [...state.messageList, action.payload]
            };
        case GET_CHAT:
            return {
                ...state,
                activeChat: action.payload
            }
        case GET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case CLEAR_CHAT:
                return {
                    ...state,
                    activeChat: null
                }
        case CHAT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
           return null
    }
    
}