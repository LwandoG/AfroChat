import React, {useReducer, useState, useContext}  from 'react';
import uuid from 'uuid';
import axios from 'axios'
import ChatReducer from './chatReducer'
import ChatContext from './chatContext';
import AuthContext from '../auth/AuthContext'

import {GET_CHAT, GET_CHATS, SEND_MESSAGE, CHAT_ERROR} from '../../types'

const ChatState = props => {
    const authContext = useContext(AuthContext)
    const initialState = {
        chats: [],
        activeChat:{id: 2,
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
                    id: '5f2822faf798c218188ca07b',
                    sender: 'xx',
                    senderName: "Jane Doe",
                    receipientName:"John Doe",
                    receipient:'yy',
                    message:"yiyo",
                    date: Date.parse("2020-08-03T15:45:14.389+00:00") 
                }

                
            ]},
            error: null
    }
    const [state, dispatch] = useReducer(ChatReducer, initialState)

    const getChats = async () => {

          try {
              const res = await axios.get('/api/chat')
              dispatch({ query: GET_CHATS, payload: res.data})
          } catch (err) {
              console.error(err)
              dispatch({query: CHAT_ERROR, payload: err.response.message})
          }
        
    }

    //Update Chat
    const sendMessage = async chat => {
        const configuration = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

          try {
              const res = await axios.post('/api/chat', chat, configuration)
          } catch (error) {
              
          }
        dispatch({ query: SEND_MESSAGE, payload: chat})
    }

    //Set active chat
    const setActiveChat = chat => {
        dispatch({query: GET_CHAT, payload: chat})
    }

    //Clear active chat
    /*const clearActiveChat = chat => {
        dispatch({query: GET_CHAT, payload: chat})
    }*/

    //Filter chats

    //Clear filter chats

    return(
        <ChatContext.Provider value={{chats: state.chats, 
        activeChat: state.activeChat, messageList: state.activeChat.messageList, error: state.error, sendMessage, setActiveChat, getChats}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatState;