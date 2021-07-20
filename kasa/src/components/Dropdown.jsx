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
        <h3>{this.props.title}
        {!visible ?
        <img onClick={this.show} src="/img/chevron_bas.svg" alt="" /> : 
        <img onClick={this.show} src="/img/chevron_haut.svg" alt="" />
        }
        </h3>
          <p className={
            this.state.visible ? "about_text active_text" : "about_text"
          }
       >
          {this.props.text} 
          </p>
        
      </div>
    
    );
  }
}

export default Dropdown;
