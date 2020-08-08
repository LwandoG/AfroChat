import React, { useContext } from 'react'
import { Input, Button } from 'react-chat-elements'
import ChatContext from '../context/chat/chatContext'

const MessageInput = () => {
    const chatContext = useContext(ChatContext)
    const {activeChat, sendMessage} = chatContext
    const onSubmit = () => {
        console.log(activeChat.messageList)
    }


    return (
        <Input
            placeholder="Type your message..."
            multiline={true}
            rightButtons={
                <Button
                    color='white'
                    backgroundColor='blue'
                    text='Send'
                    onClick={console.log(activeChat.messageList)}/>
    }/>
    )
}

export default MessageInput
