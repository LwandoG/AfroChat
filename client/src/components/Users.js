import React from 'react'
import axios from 'axios'
import Chat from './Chat'
import { ChatItem } from 'react-chat-elements'
import User from './User'

const Users = async () => {
    let users = await axios.get('/api/users')
    return (
        <div>
            {users.data.map(element => (
                <ChatItem
                user={element} key={element.id}/>

    ))}
        </div>
    )
}

export default Users
