import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class Preview extends Component {
  render = () => {
    let myStyle = {
      ...this.props.style,
      height: "100vh",
      width: "50vh",
      padding: "30px"
    };
    return (
      <div style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        sollicitudin sem et ante luctus sodales. Vivamus mi eros, fringilla et
        felis vitae, efficitur efficitur justo. Praesent dolor mauris, ultrices
        vel justo ac, sagittis
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { style: state.style };
};

export default connect(mapStateToProps)(Preview);
