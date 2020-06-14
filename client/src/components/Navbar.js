import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header">
            <div className="logo">
                <span>Indonesian Film Database</span>
            </div>
            <div className="nav">
                <ul>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink to="/movies">MOVIES</NavLink></li>
                    <li><NavLink to="/movies">SUBMIT</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;