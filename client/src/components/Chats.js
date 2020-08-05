import React, { useState, useContext } from 'react'
import ChatList from './ChatList'
import Message from './Message'
import ChatContext from '../context/chat/chatContext'

const Chats = (chat) => {
    const chatContext = useContext(ChatContext)
    const {activeChat, sendMessage} = chatContext

    const [conversation, setConversation] = useState({
        receipient: '',
        sender: '',
        senderName: '',
        receipientName: '',
        messageList: []
    })
    return (
        <div>
            
            {activeChat.messageList.map(message => <Message chatObj={message} key={message.message}/>)}
              
        </div>
    )
}

export default Chats
