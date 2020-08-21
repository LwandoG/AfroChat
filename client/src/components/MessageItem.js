import React, { createRef } from 'react'
import Box from '@material-ui/core'
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements'
import { ChatBubble, Message } from 'react-chat-ui'
import "react-chat-elements/dist/main.css";

const MessageItem = (messageObj ) => {
    const idd = messageObj.id
    const mess = messageObj.message
    const msg = new Message({id:idd, message: mess})
    return (
        <ChatBubble message={msg} key={idd}/>
    )
}

export default MessageItem
