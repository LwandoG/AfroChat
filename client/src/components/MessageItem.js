import React, { createRef } from 'react'
import Box from '@material-ui/core'
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements'
import { ChatBubble, Message } from 'react-chat-ui'

const MessageItem = (messageObj ) => {
    console.log(messageObj)
    console.log(messageObj.chatObj)
    const idd = messageObj.chatObj.id
    const mess = messageObj.chatObj.message
    const msg = new Message({id:idd, message: mess})
    return (
        <ChatBubble message={msg}/>
    )
}

export default MessageItem
