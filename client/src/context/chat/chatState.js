import React, {useReducer, useState}  from 'react';
import uuid from 'uuid';
import ChatReducer from './chatReducer'
import ChatContext from './chatContext';

import {GET_CHAT, SEND_MESSAGE} from '../../types'

const ChatState = props => {
    const initialState = {
        chats: [
            {
                id: 1,
                receipient: 'xx',
                sender: 'yy',
                senderName: 'John Doe',
                receipientName: 'Jane Doe',
                messageList: [
                    {
                    id: '5f2822faf798c218188ca07e',
                    sender: 'yy',
                    senderName: "John Doe",
                    receipientName:"Jane Doe",
                    receipient:'xx',
                    message:"test",
                    date: Date.parse("2020-08-03T14:45:14.389+00:00") 
                    },
                    {
                        id: '5f2822faf798c218188ca07e',
                        sender: 'xx',
                        senderName: "Jane Doe",
                        receipientName:"John Doe",
                        receipient:'yy',
                        message:"test1",
                        date: Date.parse("2020-08-03T15:45:14.389+00:00") 
                    }

                    
                ]
                
            },
            
        ],
        activeChat: null

    }
    const [state, dispatch] = useReducer(ChatReducer, initialState)

    //Add Chat

    //Delete Chat

    //Update Chat
    const sendMessage = chat => {
        dispatch({ query: SEND_MESSAGE, payload: chat})
    }

    //Set active chat
    const setActiveChat = chat => {
        dispatch({query: GET_CHAT, payload: chat})
    }

    //Clear active chat
    const clearActiveChat = chat => {
        dispatch({query: GET_CHAT, payload: chat})
    }

    //Filter chats

    //Clear filter chats

    return(
        <ChatContext.Provider value={{chats: state.chats, sendMessage}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatState;