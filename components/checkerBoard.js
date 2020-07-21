import React, { Component } from 'react';
import Column from './column';

export default class CheckerBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [];
    for (let i = 0; i < this.props.checkerBoardInput; i++) {
      columns.push(<Column
        checkersLocation={this.props.checkersLocation}
        columnIndex={i}
        checkerBoardInput={this.props.checkerBoardInput}
        movePiece1={this.props.movePiece1}
        movePiece2={this.props.movePiece2}
      />);
    }

    return (
      <div style={{display: 'flex', border: '1px solid white'}}>
        {columns}
      </div>
    )
  }
}
