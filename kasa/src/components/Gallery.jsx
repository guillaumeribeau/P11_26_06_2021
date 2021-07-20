import React, { Component } from "react";
import rightArrow from "../assets/arrow_next.svg";
import leftArrow from "../assets/arrow_forward.svg";

class Gallery extends Component {
  state = {
    currentPicture: 0,
  };

  goToNextImage = () => {
    this.setState((prevState) => ({
      currentPicture:
        prevState.currentPicture === 0
          ? this.props.images.length - 1
          : prevState.currentPicture - 1,
    }));
  };

  goToPreviousImage= () => {
    this.setState((prevState) => ({
      currentPicture:
        prevState.currentPicture === this.props.images.length - 1
          ? 0
          : prevState.currentPicture + 1,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentPicture } = this.state;

    return (
      <div className="gallery">
        <img src={images && images[currentPicture]} alt={`location`} />

        {images && images.length > 1 && (
          <div className="leftArrow" onClick={() => this.goToPreviousImage()}>
            <img className='left' src={leftArrow} alt="arrow-left" />
          </div>
        )}

        {images && images.length > 1 && (
          <div className="rightArrow" onClick={() => this.goToNextImage()}>
            <img className='right' src={rightArrow} alt="arrow-right" />
          </div>
        )}
        <div className="numberThumbs">
          {currentPicture+1}/{images && images.length}
        </div>

      </div>
    );
  }
}

export default Gallery;
