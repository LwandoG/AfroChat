import React, { useState, useContext } from 'react'
import MessageItem from './MessageItem'
import ChatContext from '../context/chat/chatContext'

const Chats = () => {
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
        <>           
            {activeChat.messageList.map(message => <MessageItem chatObj={message} key={message.id}/>)}        
        </>
        
    )
}

export default Chats
