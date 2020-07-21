import React, { Component } from 'react';

export default class BlackCircle extends Component {
  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: 'black',
      borderRadius: "50%",
      border: '1px solid white',
      width: 10,
      height: 10
    };

    return (
      <div style={circleStyle}>
      </div>
    );
  }
}
