import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-extended indigo">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo left">AfroChat</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/"><i className="material-icons">search</i></a></li>
                <li><a href="badges.html">Logout</a></li>
            </ul>
            </div>
            <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li className="tab"><a href="#test1">Messages</a></li>
                <li className="tab"><a href="#test2">Posts</a></li>
                <li className="tab"><a href="#test4">Friends</a></li>
            </ul>
            </div>
        </nav>
 
    )
}

export default Navbar;
