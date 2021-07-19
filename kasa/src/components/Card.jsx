import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home_card">
        <img src={this.props.cover} alt="" />

        <div className="home_card_title">{this.props.title}</div>
      </div>
    );
  }
}

export default Card;
