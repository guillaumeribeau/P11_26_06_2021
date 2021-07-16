
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

class NotFound extends Component {
    render() {
        return (
            <div className='notFound'>
                <Navigation/>
                <h1>404</h1>
                <h2>Oups! La page que vous emandez n'existe pas.</h2>
                <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
            </div>
        );
    }
}

export default NotFound;