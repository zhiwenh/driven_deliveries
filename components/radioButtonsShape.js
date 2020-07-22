import React, { Component } from 'react';

export default class ButtonRadioButtonsColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1: false,
      button2: false,
      button3: false,
    }
  }

  onClick (buttonNumber, e) {
    const button = 'button' + buttonNumber;
    const newState = {};
    if (this.state[button] === false) {
      newState[button] = true;
    } else {
      newState[button] = false;
    }
    this.props.changeShape(e.target.value);

    this.setState(newState);
  }

  render() {
    return (
      <form>
        Checker Shape
        <div className="radio">
          <label>
            <input type="radio" value="square" checked={this.state.button1} onClick = {(e) => this.onClick(1, e)}/>
            Square
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="triangle" checked={this.state.button2} onClick = {(e) => this.onClick(2, e)}/>
            Triangle
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="pentagon" checked={this.state.button3} onClick = {(e) => this.onClick(3, e)}/>
            Pentagon
          </label>
        </div>
      </form>
    )
  }
}
