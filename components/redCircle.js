import React, { Component } from 'react';

export default class RedCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  onClick() {
    if (this.props.checkersLocation[this.props.rowIndex][this.props.columnIndex].moving === false) {
      this.props.movePiece1('1', this.props.rowIndex, this.props.columnIndex);
    } else {
      this.props.movePiece1('1', this.props.rowIndex, this.props.columnIndex);
    }
  }

  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: 'red',
      borderRadius: "50%",
      width: 10,
      height: 10
    };

    if (this.props.checkersLocation[this.props.rowIndex][this.props.columnIndex].moving === true) {
      circleStyle['border'] = '3px solid yellow';
    }

    return (
      <div style={circleStyle} onClick={() => this.onClick()}>
      </div>
    );
  }
}
