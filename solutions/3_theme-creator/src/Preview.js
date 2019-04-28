import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class Preview extends Component {

  render = () => {
    let myFontStyle = "normal"
    if (this.props.italicStatus) {
      myFontStyle = "italic"
    }
    let myStyle = {
      height: "100vh",
      width: "50vh",
      padding: "30px",
      backgroundColor: this.props.background,
      fontFamily: this.props.fontFamily,
      fontStyle: myFontStyle
    }
    return (
      <div style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin sem et ante luctus sodales. Vivamus mi eros, fringilla et felis vitae, efficitur efficitur justo. Praesent dolor mauris, ultrices vel justo ac, sagittis
        </div>
    );
  }
}

let mapStateToProps = function (state) {
  return {
    background: state.bgcolor,
    fontFamily: state.fontName,
    italicStatus: state.isItalic
  }
}

let ConnectedPreview = connect(mapStateToProps)(Preview)

export default ConnectedPreview;
