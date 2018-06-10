import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__credits container">
            <NavLink to="/">netflixroulette</NavLink>
            </div>
        </div>
    )
};


export default Footer;