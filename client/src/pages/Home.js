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
        <div className='grid-2' style={{flexDirection: 'column'}}>
            <div>
                <ChatsList />
                <MessagesModal />
            </div>
            <div>
              <a className="btn-floating btn-large waves-effect waves-light blue" style={{position: 'absolute', right: '0', bottom: '0'}}><i class="material-icons">add</i></a>
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
