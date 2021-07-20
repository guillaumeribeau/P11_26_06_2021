import React, { Component } from 'react';
import whiteLogo from '../assets/footerLogo.png'

class Footer extends React.Component {
    render() {
        return <footer>
                    <div className="logo">
                       <img src={whiteLogo} alt=""/>
                    </div>
                    <div className="copyright">
                        <p>© 2020 Kasa. All rights reserved</p>
                    </div>
                </footer>;
    }
}

export default Footer;