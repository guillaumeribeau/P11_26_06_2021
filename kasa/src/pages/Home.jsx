import React, { Component } from 'react';
import headerImage from "../assets/sectionBackgroundAccueil.png";
import Navigation from '../components/Navigation';
import AllCards from '../components/AllCards';


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
                
            </div>
        );
    }
}

export default Home;