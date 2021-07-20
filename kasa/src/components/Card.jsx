import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home_card">
        <div className='container_image'>
        <img src={this.props.cover} alt="" />

        <span className="home_card_title">{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Card;
