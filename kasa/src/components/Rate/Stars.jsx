import React, { Component } from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Stars extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                
            </div>
        );
    }
}

export default Stars;