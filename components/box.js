import React, { Component } from 'react';
import RedCircle from './redCircle';
import BlackCircle from './blackCircle';

export default class CheckerBoard extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log('here4');
    console.log(this.props);
    this.props.movePiece2(this.props.rowIndex, this.props.columnIndex);
  }

  render() {
    if (this.props.checkersLocation[this.props.rowIndex][this.props.columnIndex].player === '1') {
      return (
        <div>
          <RedCircle
            rowIndex={this.props.rowIndex}
            columnIndex={this.props.columnIndex}
            movePiece1={this.props.movePiece1}
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
          />
        </div>
      )
    } else {
      console.log('here1');
      return (
        <div style={{width: 65, height: 65}} onClick={(e) => this.onClick()}>
        </div>
      )
    }

  }
}
