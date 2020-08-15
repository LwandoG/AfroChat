import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: ''})

        const { name, username, email, password } = user;
        const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault()
            console.log("Registered")
        }

    return (
        <div className="form-container">
            <h1>Account Registration</h1>
            <form>
                <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' name='name' value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' name='username' value={username} onChange={onChange} required />
                </div>
                <div className="form-group">
                <label htmlFor='email'>Email Address</label>
                <input id='email' type='email' name='email' value={email} onChange={onChange} required />
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

export default Register
