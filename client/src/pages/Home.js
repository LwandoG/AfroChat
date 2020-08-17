import React, { useContext, useEffect} from 'react'
import ChatsList from '../components/ChatsList'
import Chats from '../components/Chats'
import MessagesModal from '../components/MessagesModal'
import AuthContext from '../context/auth/AuthContext';

const Home = () => {
    const authContext = useContext(AuthContext)
    const { loadUser } = authContext;

    useEffect(() => {
        loadUser()
    }, [])
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
