import React, { Component } from 'react';
import './App.css';

class Preview extends Component {

  render = () => {
    let myFontStyle = "normal"
    let myStyle = {
      height: "100vh",
      width: "50vh",
      padding: "30px",
      fontStyle: myFontStyle
    }
    return (
      <div style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin sem et ante luctus sodales. Vivamus mi eros, fringilla et felis vitae, efficitur efficitur justo. Praesent dolor mauris, ultrices vel justo ac, sagittis
        </div>
    );
  }
}



export default Preview;
