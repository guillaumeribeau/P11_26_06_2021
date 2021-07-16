import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Tag from "../components/Tag";
import logo from "../assets/logo.svg";
import Dropdown from "../components/Dropdown";
import Profils from "../components/Profils";
import Gallery from "../components/Gallery";
import Image from "../components/Image";
import Stars from "../components/Rate/Stars";

class Appartement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
          data: property[0],
        });
      });
  }

  render() {
    const { data } = this.state;
    const tagsData = this.state.data.tags;
    const profilData = this.state.data.host;
    const pictureData = this.state.data.pictures;
    

    return (
      <div className="appartement">
        <div>
          <Navigation />
        </div>

        <Gallery images= {pictureData}/>
 
                   
    
        <h1>{data.title}</h1>
        <h2>{data.location}</h2>
        <div className="property__tags">
          {tagsData && tagsData.map((tag, i) => <Tag key={i} name={tag} />)}
        </div>
        <div className="about_container">
        <Dropdown title="Description" text={data.description} />
        <Dropdown
          title="Équipements"
          text={
            data.equipments &&
            data.equipments.map((equipement) => <li>{equipement}</li>)
          }
        />
      </div>
        <div>
          {profilData && (
            <Profils name={profilData.name} avatar={profilData.picture} />
          )}
        </div>
        <Stars/>
      </div>
    );
  }
}

export default Appartement;
