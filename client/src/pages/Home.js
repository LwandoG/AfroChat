import React, { useContext, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import ChatsList from '../components/ChatsList'
import Chats from '../components/Chats'
import MessagesModal from '../components/MessagesModal'
import AuthContext from '../context/auth/AuthContext';

const Home = () => {
    const authContext = useContext(AuthContext)
    const { loadUser, isAuthenticated } = authContext;

    useEffect(() => {
        loadUser()
    }, [])
    const guestHome = (
        <Redirect to='/login' />
    )
    const userHome = (
        <div className='grid-2' style={{flexDirection: 'row'}}>
            <div>
                <ChatsList />
                <MessagesModal />
            </div>
        </div>
    )
    return (
        <>
        {isAuthenticated ? userHome: guestHome}
        </>
    )
}

export default Home
