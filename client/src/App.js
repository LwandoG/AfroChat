import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'
import ChatState from './context/chat/chatState'
import Chats from './components/Chats'
import ChatList from './components/ChatList';

function App() {
  useEffect(() => {
    M.AutoInit();
  })

  return (
    <ChatState>
      <Navbar />
      <div className="col-sm-3">
         <ChatList />
      </div>
      <div className="col">
        <Chats />
      </div>
      
      
    </ChatState>
      
  );
}

export default App;
