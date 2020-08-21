import React, { useContext } from 'react'
import { ChatItem } from 'react-chat-elements'
import PropTypes from 'prop-types'
import ChatContext from '../context/chat/chatContext'
import AuthContext from '../context/auth/AuthContext'
import './ChatItem.css'


const Chat = ({ chat }) => {
    const chatContext = useContext(ChatContext)
    const authContext = useContext(AuthContext)

    const {chats, sendMessage, setActiveChat, clearActiveChat} = chatContext
    const { user } = authContext
    
    console.log(chats)

    return (
        <a href="#view-messages" className="modal-trigger" data-toggle="modal" data-target="#view-messages">
            <ChatItem
            avatarFlexible = {true}
            title={chat.receipientName === user.name ? chat.senderName : chat.receipientName}
            key = {chat.id}
            onClick={() => setActiveChat(chat)}/>
        </a>
        

    )
}

Chat.propTypes = {
    chat: PropTypes.object.isRequired
}

export default Chat
