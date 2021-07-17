import React, { Component } from "react";
import Stars1 from "./Stars1";
import Stars2 from "./Stars2";
import Stars3 from "./Stars3";
import Stars4 from "./Stars4";
import Stars5 from "./Stars5";

class Rate extends Component {
    constructor(props) {
        super(props);
        this.state={}
       
        }
      


  render() {
    const numberStars = (props) => {
      switch (this.props.number) {
        case "1":
          return <Stars1 />;
          case "2":
          return <Stars2 />;
        case "3":
          return <Stars3 />;
        case "4":
          return <Stars4 />;
        case "5":
          return <Stars5 />;

        default:
          return <h1>Rating is missing</h1>;
      }
    };

    return <div>{numberStars()}</div>;
  }
}

export default Rate;
