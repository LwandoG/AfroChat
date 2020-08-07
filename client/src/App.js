import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'
import ChatState from './context/chat/chatState'
import Chats from './components/Chats'
import ChatsList from './components/ChatsList';
import Split from 'split.js'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    M.AutoInit();
  })

  return (
    <ChatState>
      <Navbar />
      <Home />
    </ChatState>
      
  );
}

export default App;
