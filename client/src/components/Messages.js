import React, { useContext } from 'react'
import { MessageList } from 'react-chat-elements'
import ChatContext from '../context/chat/chatContext'
import MessageItem from './MessageItem'

const Messages = () => {
    const chatContext = useContext(ChatContext);
    const { activeChat } = chatContext;

    const messages = activeChat.messageList
    return (
        <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={messages.map(message => <MessageItem chatObj={message} key={message.id}/>)} />
    )
}

export default Messages
