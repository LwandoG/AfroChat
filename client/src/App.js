import React, { useEffect, useContext } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'
import ChatState from './context/chat/chatState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import Alert from './components/Alert'
import Home from './pages/Home'
import Register from './components/Register'
import Login from './components/Login'
import setAuthToken from './setAuthToken'
import AuthContext from './context/auth/AuthContext'

function App() {
  const authContext = useContext(AuthContext)
  const { isAuthenticated} = authContext;
  useEffect(() => {
    M.AutoInit();
  })
  if(localStorage.token) setAuthToken(localStorage.token);

  return (
    <AuthState>
      <ChatState>
        <AlertState>
          <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/register' component={Register} />
            <Route exact path ='/login' component={Login} />
          </Switch>
          </Router>
        </AlertState>
      </ChatState>
    </AuthState>
      
  );
}

export default App;
