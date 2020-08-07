import React, { useContext } from 'react'
import { ChatItem } from 'react-chat-elements'
import PropTypes from 'prop-types'
import ChatContext from '../context/chat/chatContext'
import './ChatItem.css'


const Chat = ({ chat }) => {
    const chatContext = useContext(ChatContext)

    const {chats, sendMessage, setActiveChat, clearActiveChat} = chatContext
    

    return (
        <a href="">
            <ChatItem
            avatarFlexible = {true}
            title={chat.receipientName}
            onClick={() => setActiveChat(chat)}/>
        </a>
        

    )
}

Chat.propTypes = {
    chat: PropTypes.object.isRequired
}

export default Chat
