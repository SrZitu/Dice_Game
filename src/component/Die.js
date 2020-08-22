import React, { Component } from "react";
import "./die.css";

export default class Die extends Component {
  render() {
    return (
      <i
        className={`dice-icon fas fa-dice-${this.props.face} ${
          this.props.rolling ? "shaking" : ""
        }`}
      ></i>
    );
  }
}
