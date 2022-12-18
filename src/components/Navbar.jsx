import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
    return (
        <div id="Navbar">
            <NavLink to="/" className="title" >Home</NavLink>
            <NavLink to="/Students" className="title" >Students</NavLink>
            <NavLink to="/ContactUs" className="title" >Contact Us</NavLink>
        </div>
    );
}

export default Navbar;