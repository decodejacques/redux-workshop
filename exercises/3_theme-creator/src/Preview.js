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
    return <div style={myStyle}>{this.props.text}</div>;
  };
}

let mapStateToProps = state => {
  return { style: state.style, text: state.text };
};

export default connect(mapStateToProps)(Preview);
