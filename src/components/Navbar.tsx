import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav className='light-blue darken-1 px1'>
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">React + TS</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">List Todo</NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}