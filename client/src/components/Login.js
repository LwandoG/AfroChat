import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''})

        const { username, password } = user;
        const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault()
            console.log("Registered")
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
