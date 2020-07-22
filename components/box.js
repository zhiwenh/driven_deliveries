import React, { Component } from 'react';
import RedCircle from './redCircle';
import BlackCircle from './blackCircle';
import BlueCircle from './blueCircle';

export default class CheckerBoard extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // this.props.movePiece2(this.props.rowIndex, this.props.columnIndex);
  }

  render() {
    if (this.props.checkersLocation[this.props.rowIndex][this.props.columnIndex].player === '1') {
      return (
        <div>
          <RedCircle
            rowIndex={this.props.rowIndex}
            columnIndex={this.props.columnIndex}
            movePiece1={this.props.movePiece1}
            checkersLocation={this.props.checkersLocation}
          />
        </div>
      )
    } else if (this.props.checkersLocation[this.props.rowIndex][this.props.columnIndex].player === '2') {
      return (
        <div>
          <BlackCircle
            rowIndex={this.props.rowIndex}
            columnIndex={this.props.columnIndex}
            movePiece1={this.props.movePiece1}
            checkersLocation={this.props.checkersLocation}
          />
        </div>
      )
    } else if (this.props.checkersLocation[this.props.rowIndex][this.props.columnIndex] === 'suggested') {
      return (
        <div>
          <BlueCircle
            rowIndex={this.props.rowIndex}
            columnIndex={this.props.columnIndex}
            movePiece1={this.props.movePiece1}
            movePiece2={this.props.movePiece2}
            checkersLocation={this.props.checkersLocation}
          />
        </div>
      )
    } else {
      return (
        <div style={{width: 65, height: 65}} onClick={(e) => this.onClick()}>
        </div>
      )
    }

  }
}
