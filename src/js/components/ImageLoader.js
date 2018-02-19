import React, { Component } from "react";
import PropTypes from 'prop-types'

export class ImageLoader extends Component {
  constructor() {
    super();
    this.state ={
      currentImage: "",
      opacity: ""
    }
    this._loadImage = this._loadImage.bind(this);
  }
  componentDidMount(){
    this._loadImage();
  }

  _loadImage(){
    if(this.state.currentImage !=="") return;
    const src =  this.props.src;
    var img = document.createElement("img");
    img.onload = () =>{
      this.setState({currentImage: src});
    }
    img.onerror = () =>{
      console.log(src)
    }
    img.src = src;
  }
  
  render() {
    const {currentImage} = this.state;
    return (
      <div >
        <img src={currentImage} />
      </div>
    );
  }
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
}
