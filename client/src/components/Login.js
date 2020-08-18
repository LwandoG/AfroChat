import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/AlertContext'
import AuthContext from '../context/auth/AuthContext'

const Login = props => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext;

    const { loginUser, error, clearError, isAuthenticated } = authContext;


    const [user, setUser] = useState({
        username: '',
        password: ''})
        useEffect(() => {
            if(isAuthenticated) props.history.push('/')
            if(error){
                setAlert(error);
                clearError();
            }
        }, [error, isAuthenticated, props.history])

        const { username, password } = user;
        const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault()
            if(username === '' || password === '') setAlert("All fields are required.")
            else loginUser({username, password})
        }

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' name='username' value={username} onChange={onChange} required />
                </div>
                <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name='password' value={password} onChange={onChange} required minLength='6' />
                </div>
                <button type="submit" onClick={onSubmit}>Submit</button>
            </form>
            
        </div>
    )
}

export default Login
