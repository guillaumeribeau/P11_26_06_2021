import React, { Component } from "react";
import { Link } from "react-router-dom";


import Card from "./Card";

class AllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch(".././data.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }



  render() {
    const { data } = this.state;

    return (
      <div className="container_card">
        {data.map((card) => (
            <Link key={`appartement-${card.id}`} to= {`/appartement/${card.id}`}>
          <Card cover={card.cover} id={card.id} title={card.title} /></Link>
        ))}
      </div>
    );
  }
}

export default AllCards;
 

