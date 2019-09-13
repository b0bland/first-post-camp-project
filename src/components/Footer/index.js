import React from 'react';
import './style.css';
import logo from './bbb-logo.png'

function Footer () {
    return (
    <div>
        <footer> 
            <div id = "company-content">
                <p> License #707695 </p>
                <p>Economy Plumbing Sewer and Drain</p>
                <p>San Francisco, California </p>
            </div>
            <div id = "bbb">
                <img src = {logo} alt ="better business bureau" id="bbb-logo"/>
            </div>
            <div id = "copyright">
                2019 Copyright© Economy Plumbing. All Rights Reserved.
            </div>
        </footer>
    </div>
    )
}

export default Footer;