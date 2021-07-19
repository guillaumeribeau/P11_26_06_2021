
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

class NotFound extends Component {
    render() {
        return (
            <div className='notFound'>
                <Navigation/>
                <h1>404</h1>
                <h2>Oups! La page que vous emandez n'existe pas.</h2>
                <NavLink className='return_home' to='/'>Retourner sur la page d'accueil</NavLink>
                <Footer/>
            </div>
           
        );
    }
}

export default NotFound;