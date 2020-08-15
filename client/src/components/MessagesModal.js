import React, { useContext } from 'react'
import Chats from './Chats'
import ChatContext from '../context/chat/chatContext'
import MessageInput from './MessageInput'
import "react-chat-elements/dist/main.css";

const MessagesModal = () => {
    const chatContext = useContext(ChatContext)
    const {activeChat, sendMessage} = chatContext

    return (
        <div id="view-messages" className="modal" style={{width: '50%', height: '75%'}}>
            <div className="modal-content" style={{height: '100%'}}>
               <h5 style={{justifySelf: 'center'}}>{activeChat.receipientName}</h5>
               <Chats />
            </div>
            <div className="modal-footer" style={{position: 'absolute', bottom: 0}}>
               <MessageInput />
            </div>
        </div>
    )
}

export default MessagesModal
