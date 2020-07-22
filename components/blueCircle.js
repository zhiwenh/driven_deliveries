import React, { Component } from 'react';

export default class BlueCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  onClick() {
    this.props.movePiece2(this.props.rowIndex, this.props.columnIndex);
  }

  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: '#87CEFA',
      borderRadius: "50%",
      border: '1px solid white',
      width: 10,
      height: 10
    };

    return (
      <div style={circleStyle}  onClick={() => this.onClick()}>
      </div>
    );
  }
}
