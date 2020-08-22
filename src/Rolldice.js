import React, { Component } from "react";
import Die from "./component/Die";
import "./component/rolldice.scss";

export default class Rolldice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  state = {
    dei1: "one",
    dei2: "one",
    rolling: false,
  };
  roll = (e) => {
    //pick two new die roll
    let newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    let newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    //set state with new role
    this.setState({
      dei1: newDie1,
      dei2: newDie2,
      rolling: true,
    });

    setInterval(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="rollDice">
        <Die face={this.state.dei1} rolling={this.state.rolling} />
        <Die face={this.state.dei2} rolling={this.state.rolling} />
        <div className="button-dice">
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling" : "Roll Dice"}
          </button>
        </div>
      </div>
    );
  }
}
