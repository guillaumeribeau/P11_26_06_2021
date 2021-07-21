import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
      <img className="logo" src={logo} alt="logo de Kasa" />
      <nav className="header_nav">
        <NavLink to ="/"  exact activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink to ="/a-propos" exact activeClassName="nav-active">
          A Propos
        </NavLink>
      </nav>
    </div>
    );
  }
}

export default Navigation;
