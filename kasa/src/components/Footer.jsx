import React, { Component } from 'react';
import whiteLogo from '../assets/footerLogo.png'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img src={whiteLogo} alt="logo"/>
                <span>© 2020 Kasa. All rights reserved</span>
                
            </div>
        );
    }
}

export default Footer;