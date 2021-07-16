import React, { Component } from 'react';
import rightArrow from "../assets/arrow_next.svg";


class RightArrow extends Component {
    
     render() {
    
       return(
    
         <div className='rightArrow' onClick={this.props.goToNextSlide}>
    
           <img src={rightArrow} alt="arrow-right"/>
    
         </div>
    
       )
    
     }
    
    }export default RightArrow;