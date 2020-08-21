import React from 'react'
import { ChatItem } from 'react-chat-elements'

const User = user => {
    return (
        <ChatItem
        avatarFlexible = {true}
        title={user.name}
        key = {user.id}
        />
    )
}

export default User
