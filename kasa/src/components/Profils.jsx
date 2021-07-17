import React, { Component } from 'react';
import Stars from './Rate/Stars1';

class Profils extends Component {
    render() {
        return (
            <>
            <div className='profils'>
                <div className='profils_name'>{this.props.name}</div>
                <img src={this.props.avatar} alt="avatar"/>
               
            </div>
            
             </>
        );
    }
}

export default Profils;