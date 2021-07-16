import React, { Component } from "react";
import leftArrow from "../assets/arrow_forward.svg";

class LeftArrow extends Component {
  render() {
    return (
      <div className="leftArrow" onClick={this.props.goToPrevSlide}>
        <img src={leftArrow} alt="arrow-left" />
      </div>
    );
  }
}
export default LeftArrow;
