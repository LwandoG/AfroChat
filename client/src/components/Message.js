import React from 'react'
import Box from '@material-ui/core'
import {  ChatBubble } from 'react-chat-ui'

const Message = (messageObj ) => {
    return (
        <div className="card">
            <ul className="collection">
            <li className="collection-item"><p>{messageObj.message}</p>
            </li>

            </ul>
        </div>
    )
}

export default Message
