import React from 'react'
import ChatsList from '../components/ChatsList'
import Chats from '../components/Chats'
import MessagesModal from '../components/MessagesModal'

const Home = () => {
    return (
        <div className='grid-2' style={{flexDirection: 'row'}}>
            <div>
                <ChatsList />
                <MessagesModal />
            </div>
        </div>
    )
}

export default Home
