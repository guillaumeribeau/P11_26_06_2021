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
    const visible= this.state.visible
    return (
      <div className="about_content">
        <h3>{this.props.title}</h3>
        {!visible ?
        <img onClick={this.show} src="/img/chevron_bas.svg" alt="" /> : 
        <img onClick={this.show} src="/img/chevron_haut.svg" alt="" />
        }
        <div>
          <p className={
            this.state.visible ? "about_text active_text" : "about_text"
          }
       >
          {this.props.text} 
          </p>
        </div>
      </div>
    );
  }
}

export default Dropdown;
