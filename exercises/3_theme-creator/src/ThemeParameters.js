import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class ThemeParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#ffffff"
    };
  }
  color = e => {
    this.setState({ backgroundColor: e.target.value });
    this.props.dispatch({
      type: "backgroundColorChange",
      content: this.state.backgroundColor
    });
  };
  arial = () => {
    this.props.dispatch({
      type: "fontFamilyChange",
      content: "Arial, sans-serif"
    });
  };
  timesNewRoman = () => {
    this.props.dispatch({
      type: "fontFamilyChange",
      content: "'Times New Roman', serif"
    });
  };
  italic = e => {
    if (e.target.checked) {
      this.props.dispatch({
        type: "fontStyleChange",
        content: "italic"
      });
    } else {
      this.props.dispatch({
        type: "fontStyleChange",
        content: "normal"
      });
    }
  };
  bold = e => {
    if (e.target.checked) {
      this.props.dispatch({
        type: "fontWeightChange",
        content: "bold"
      });
    } else {
      this.props.dispatch({
        type: "fontWeightChange",
        content: "normal"
      });
    }
  };
  generateText = () => {
    this.props.dispatch({
      type: "generateText"
    });
  };
  render = () => {
    return (
      <div>
        <div>
          {" "}
          Pick your color
          <input
            onChange={this.color}
            value={this.state.backgroundColor}
            type="color"
          />
        </div>
        <div>Pick your font</div>
        <div>
          <input
            type="radio"
            name="fontgroup"
            value="arial"
            onChange={this.arial}
          />{" "}
          Arial
          <input
            type="radio"
            name="fontgroup"
            value="times new roman"
            onChange={this.timesNewRoman}
          />{" "}
          Times new roman
        </div>
        <div>
          <input type="checkbox" onChange={this.italic} /> italic
        </div>
        <div>
          <input type="checkbox" onChange={this.bold} /> bold
        </div>
        <div>
          <button onClick={this.generateText}>Generate new text</button>
        </div>
      </div>
    );
  };
}

export default connect()(ThemeParameters);
