import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import ChatContext from '../context/chat/chatContext'
import Chat from './Chat'
import "react-chat-elements/dist/main.css";


const ChatsList = () => {
    const chatContext = useContext(ChatContext)
    const {chats, activeChat, sendMessage, getChats} = chatContext

    useEffect(() => {
        getChats()
    }, [])
    console.log(chats)

    return (
        <>
          {chats.length > 0 ? chats.map(chat => <Chat chat={chat} key={chat.id}/>): <h5>No chats</h5>}  
        </>
    )
}

export default ChatsList;
