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

  onClick (buttonNumber) {
    const button = 'button' + buttonNumber;
    const newState = {};
    if (this.state[button] === false) {
      newState[button] = true;
    } else {
      newState[button] = false;
    }

    this.setState(newState);
  }

  render() {
    return (
      <form>
        Player 2 Checker Color
        <div className="radio">
          <label>
            <input type="radio" checked={this.state.button1} onClick = {(e) => this.onClick(1, e)}/>
            Cyan
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" checked={this.state.button2} onClick = {(e) => this.onClick(2, e)}/>
            Brown
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" checked={this.state.button3} onClick = {(e) => this.onClick(3, e)}/>
            Gray
          </label>
        </div>
      </form>
    )
  }
}
