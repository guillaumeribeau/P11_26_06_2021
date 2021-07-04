import React, { Component } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Tag from "../components/Tags";
import logo from "../assets/logo.svg";

class Appartement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataIsLoaded: false,
    };
  }

  componentDidMount() {
    fetch(".././data.json")
      .then((response) => response.json())
      .then((data) => {
        const property = data.filter(
          (property) => property.id === this.props.match.params.id
        );
        this.setState({
          dataIsLoaded: true,
          data: property[0],
        });
      });
  }

  render() {
    const { data } = this.state;
    
    
    return (
      <div className="appartement">
        <div>
          <header>
            <img className="logo" src={logo} alt="logo de Kasa" />
            <Navigation />
          </header>
        </div>
        <h1>{data.title}</h1>
        <h2>{data.location}</h2>
        <div className="property__tags">
                                {this.state.data.tags.map((tag, i) => <Tag key={i} name={tag} />)}
                            </div>
        
=        </div>
    );
  }
}

export default Appartement;
