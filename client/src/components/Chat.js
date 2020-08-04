import React from 'react'
import PropTypes from 'prop-types'

const Chat = ({ chat }) => {
    return (
        <div className="card">
            <ul className="collection">
                {console.log('object')}
             <li className="collection-item"><h5>{chat.receipientName}</h5>
             <a href="#!" className="large secondary-content"><i className="material-icons">message</i></a>
             </li>

            </ul>
            
        </div>
    )
}

Chat.propTypes = {
    chat: PropTypes.object.isRequired
}

export default Chat
