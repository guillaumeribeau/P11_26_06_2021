import React, { Component } from "react";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imageClick(e) {
    console.log("coucou");
  }

  render() {
    return (
      <div className="home_card">
        <img
          onClick={this.imageClick.bind(this)}
          src={this.props.cover}
          alt=""
        />

        <div className="home_card_title">{this.props.title}</div>
      </div>
    );
  }
}

export default Card;
