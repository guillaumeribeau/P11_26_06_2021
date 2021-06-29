import logo from "../assets/logo.svg";
import headerImage from "../assets/sectionBackgroundAccueil.png";
import React from "react";
import Navigation from "./Navigation";


class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img className="logo" src={logo} alt="logo de Kasa" />
          <Navigation/>
        </header>
        <div className="container_header_image">
          <div>
            <img src={headerImage} alt="paysage de montagne" />
          </div>
          <div className="text_image_header">
            Chez vous, partout et ailleurs{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
