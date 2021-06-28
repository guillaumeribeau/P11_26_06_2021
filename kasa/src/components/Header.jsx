import logo from '../assets/logo.svg'
import headerImage from '../assets/sectionBackgroundAccueil.png'
import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
render(){
return (
    <div>
<header>
    <img className='logo' src={logo} alt="logo de Kasa"/>
    <nav className='header_nav'>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
    </nav>
 </header>
    <div className='container_header_image'>
        <div className='text_image_header'>Chez vous, partout et ailleurs </div> 
        <img src={headerImage} alt="paysage de montagne"/>
    </div>

</div>



)
}


}


export default Header


