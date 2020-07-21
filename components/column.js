import React, { Component } from 'react';
import Box from './box';

export default class CheckerBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boxes = [];
    for (let i = 0; i < this.props.checkerBoardInput; i++) {
      if (this.props.columnIndex % 2 === 0) {
        if (i % 2 === 0) {
          boxes.push(<div style={{width: 65, height: 65, border: '1px solid', backgroundColor: 'black'}}>
              <Box
                columnIndex={this.props.columnIndex}
                checkerBoardInput={this.props.checkerBoardInput}
                rowIndex={i}
                checkersLocation={this.props.checkersLocation}
                movePiece1={this.props.movePiece1}
                movePiece2={this.props.movePiece2}
              />
            </div>);
        } else {
          boxes.push(<div style={{width: 65, height: 65, border: '1px solid', backgroundColor: 'white'}}>
              <Box
                columnIndex={this.props.columnIndex}
                checkerBoardInput={this.props.checkerBoardInput}
                rowIndex={i}
                checkersLocation={this.props.checkersLocation}
                movePiece1={this.props.movePiece1}
                movePiece2={this.props.movePiece2}
              />
            </div>);
        }
      } else {
        if (i % 2 === 0) {
          boxes.push(<div style={{width: 65, height: 65, border: '1px solid', backgroundColor: 'white'}}>
            <Box
              columnIndex={this.props.columnIndex}
              checkerBoardInput={this.props.checkerBoardInput}
              rowIndex={i}
              checkersLocation={this.props.checkersLocation}
              movePiece1={this.props.movePiece1}
              movePiece2={this.props.movePiece2}
            />
          </div>);
        } else {
          boxes.push(<div style={{width: 65, height: 65, border: '1px solid', backgroundColor: 'black'}}>
            <Box
              columnIndex={this.props.columnIndex}
              checkerBoardInput={this.props.checkerBoardInput}
              rowIndex={i}
              checkersLocation={this.props.checkersLocation}
              movePiece1={this.props.movePiece1}
              movePiece2={this.props.movePiece2}
            />
          </div>);
        }
      }
    }

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {boxes}
      </div>
    )
  }
}
