import React from 'react';




class Tag extends React.Component {
  

    render() { 
        return <span className="tag">{this.props.name}</span>;
    }
}

export default Tag;