import React, { Component } from 'react';

class Profils extends Component {
    render() {
        return (
            <div className='profils'>
                <div className='profils_name'>{this.props.name}</div>
                <img src={this.props.avatar} alt="avatar"/>
            </div>
        );
    }
}

export default Profils;