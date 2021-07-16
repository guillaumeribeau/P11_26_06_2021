import React, { Component } from 'react';
import headerImage from "../assets/sectionBackgroundAccueil.png";
import Navigation from '../components/Navigation';
import AllCards from '../components/AllCards';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            
            <div>
                <Navigation/>
                <div className="container_header_image">
          <div>
            <img src={headerImage} alt="paysage de montagne" />
          </div>
          <div className="text_image_header">
            Chez vous, partout et ailleurs{" "}
          </div>
        </div>
                 <AllCards/>
                <Footer/>
            </div>
        );
    }
}

export default Home;