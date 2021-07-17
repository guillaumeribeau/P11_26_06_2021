import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Profils from "../components/Profils";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Rate from "../components/Rate/Rate";

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
    const starsData = this.state.data.rating;

    return (
      <div className="appartement">
        <div>
          <Navigation />
        </div>

        <Gallery images={pictureData} />

        <div className="information_container">
          <div className="information_title">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <div className="property__tags">
              {tagsData && tagsData.map((tag, i) => <Tag key={i} name={tag} />)}
            </div>
          </div>
          <div>
            {profilData && (
              <Profils name={profilData.name} avatar={profilData.picture} />
            )}
            <div className="stars">
              <Rate number={starsData && starsData} />
            </div>
          </div>
        </div>
        <div className="description_container">
          <Dropdown title="Description" text={data.description} />
          <Dropdown
            title="Équipements"
            text={
              data.equipments &&
              data.equipments.map((equipement) => <li>{equipement}</li>)
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Appartement;
