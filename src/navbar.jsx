import React from 'react';
import './App.css'
import {Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav >
            <div className='navigation-link'>
                <Link to="/" className='navTag'>places</Link>
                <Link to="/aboutUs" className='navTag'>About</Link> 
                <Link to="/contact" className='navTag'>contact</Link>
            </div>
        </ nav>
    );
}

export default Navbar;