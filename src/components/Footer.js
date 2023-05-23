import React from 'react';
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Youtube from '../assets/youtube.png'

import './styles/styles.css';

export const Footer = () => {
    return (
        <section className="footer">
            <ul className="social">
                <li><a href="#"><img src={Facebook} alt="Facebook"/></a></li>
                <li><a href="#"><img src={Instagram} alt="Instagram"/></a></li>
                <li><a href="#"><img src={Youtube} alt="Youtube"/></a></li>
            </ul>
        </section>
    )
}