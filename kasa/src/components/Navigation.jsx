import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="header_nav">
        <NavLink to ="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink to ="/a-propos" activeClassName="nav-active">
          A Propos
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
