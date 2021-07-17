import React, { Component } from "react";
import starColor from "../../assets/star-color.svg";
import starEmpty from "../../assets/star-empty.svg";

class Stars4 extends Component {
  render() {
    return (
      <div>
        <img src={starColor} alt="" />
        <img src={starColor} alt="" />
        <img src={starColor} alt="" />
        <img src={starColor} alt="" />
        <img src={starEmpty} alt="" />
      </div>
    );
  }
}

export default Stars4;
