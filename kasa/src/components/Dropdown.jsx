import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  show = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div className="about_content">
        <h2>{this.props.title}</h2>
        <img onClick={this.show} src="/img/chevron_bas.svg" alt="" />
        <div
          className={
            this.state.visible ? "about_text active_text" : "about_text"
          }
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Dropdown;
