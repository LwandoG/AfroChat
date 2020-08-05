import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ChatContext from '../context/chat/chatContext'

const Chat = ({ chat }) => {
    const chatContext = useContext(ChatContext)

    const {chats, sendMessage, setActiveChat, clearActiveChat} = chatContext
    return (
        
        <div className="card">
            <ul className="collection">
                {console.log('object')}
             <li className="collection-item"><h5>{chat.receipientName}</h5>
             <button href="#!" className="large secondary-content" onClick={() => setActiveChat(chat)}><i className="material-icons">message</i></button>
             </li>

            </ul>
            
        </div>
    )
}

Chat.propTypes = {
    chat: PropTypes.object.isRequired
}

export default Chat
