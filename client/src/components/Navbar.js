import React, { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'

const Navbar = () => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, logout, user, loadUser } = authContext;

    const userNav = (
        <nav className="nav-extended indigo">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo left">AfroChat</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">About Us</a></li>
                <li><a href="#!" onClick={logout()}>Logout</a></li>
            </ul>
            </div>
            <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li className="tab"><a href="/">Messages</a></li>
                <li className="tab"><a href="/">Posts</a></li>
                <li className="tab"><a href="/">Friends</a></li>
            </ul>
            </div>
        </nav>
    )

    const newNav = (
        <nav className="nav-extended indigo">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo left">AfroChat</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            </ul>
            </div>
        </nav>
    )
    return (
        <div>
        {isAuthenticated ? userNav :newNav}
        </div>
    )
}

export default Navbar;
