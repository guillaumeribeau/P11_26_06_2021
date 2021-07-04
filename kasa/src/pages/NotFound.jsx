
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

class NotFound extends Component {
    render() {
        return (
            <div className='notFound'>
                <Header/>
                <h1>404</h1>
                <h2>Oups! La page que vous emandez n'existe pas.</h2>
                <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
            </div>
        );
    }
}

export default NotFound;