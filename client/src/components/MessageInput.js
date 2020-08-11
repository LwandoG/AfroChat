import React, { useContext, useState, useRef } from 'react'
import { Input, Button } from 'react-chat-elements'
import ChatContext from '../context/chat/chatContext'

const MessageInput = () => {
    const chatContext = useContext(ChatContext)
    const {activeChat, sendMessage} = chatContext
    const text = useRef('')

    const onChange = e => {
        text.current.value = e.target.value
    }

    const onSend = () => {
        sendMessage(text.current.value)
    }


    return (
        <Input
            placeholder="Type your message..."
            multiline={true}
            id = "my-input"
            ref = {text}
            onChange = {onChange}
            rightButtons={
                <Button
                    color='white'
                    backgroundColor='blue'
                    text='Send'
                    onClick={e => sendMessage(e.target.value)}/>
    }/>
    )
}

export default MessageInput
