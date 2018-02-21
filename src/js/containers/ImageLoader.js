import React, { Component } from "react";
import PropTypes from 'prop-types'




export class ImageLoader extends Component {  
  constructor() {
    super();
    this.state ={
      currentImage: "",
      notFound: "./img/not-available.png"
    }
    this._loadImage = this._loadImage.bind(this);
    this._setValidImage = this._setValidImage.bind(this)
    this._setNotFoundImage = this._setNotFoundImage.bind(this)
    this._callImage = this._callImage.bind(this)
  }

  componentDidMount(){
    this._loadImage();
  }

  _setValidImage(src){
    return  this.setState({currentImage: <img src={src} className="image-comp__img" />});
  }
  _setNotFoundImage(){
      this.setState({currentImage: <img src={this.state.notFound} className="image-comp__img" />});
      this.forceUpdate()
   }

  _callImage (src, success, err) {
    let img = document.createElement("img");
    img.onload = () =>  success(src);
    img.onerror = () => err(src);
    img.src = src; 
    return img;
  }

  _loadImage(){
    const src = this.props.src;
    if(this.state.currentImage !=="") return false;
    this._callImage(src, this._setValidImage, this._setNotFoundImage)
    return src;
  }

  render() {
    const {currentImage} = this.state;
    return (
      <div className="result-page__img image-comp">
        {this.state.currentImage}
      </div>
    );
  }
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
}
