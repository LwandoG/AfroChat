import React, { useState, useContext, useEffect  } from 'react'
import MessageItem from './MessageItem'
import ChatContext from '../context/chat/chatContext'
import "react-chat-elements/dist/main.css";

const Chats = () => {
    const chatContext = useContext(ChatContext)
    const {chats, activeChat, sendMessage, getChats} = chatContext

    useEffect(() => {
        getChats()
    }, [])
    return (
        <>           
            {chats.length > 0 ? activeChat.messageList.map(message => <MessageItem chatObj={message} key={message.id}/>) : <h5>No messages</h5>}        
        </>
        
    )
}

export default Chats
