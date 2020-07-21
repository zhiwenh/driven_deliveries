import React, { Component } from 'react';
import CheckerBoard from '../components/checkerBoard'
import CheckerBoardInput from '../components/checkerBoardInput'
import ButtonRadioButtonsColor from '../components/bottomRadioButtonsColor'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkerBoardInput: 8,
      pieceToMove: [undefined, undefined, undefined],
      isMovingPiece: false,
      currentlyMoving: [undefined, undefined]
    };

    this.state.checkersLocation = this.checkersLocation(8);

    console.log(this.state.checkersLocation);

    this.submitCheckerBoardInput = this.submitCheckerBoardInput.bind(this);
    this.movePiece1 = this.movePiece1.bind(this);
    this.movePiece2 = this.movePiece2.bind(this);
  }

  // Creates the locations of the checkers pieces in a matrix
  checkersLocation(checkerBoardInput) {
    const checkersLocation = [];
    for (let i = 0; i < checkerBoardInput; i++) {
      checkersLocation.push([]);
      for (let j = 0; j < checkerBoardInput; j++) {
        if (i <= 1) {
          checkersLocation[i].push({player: '1', moving: false});
        } else if (i === checkerBoardInput - 1 || i === checkerBoardInput - 2){
          checkersLocation[i].push({player: '2', moving: false});
        } else {
          checkersLocation[i].push({player: undefined, moving: undefined});
        }
      }
    }

    console.log(checkersLocation);
    return checkersLocation;
  }

  submitCheckerBoardInput(newCheckerBoardInput, e) {
    e.preventDefault();
    newCheckerBoardInput = Number(newCheckerBoardInput);
    const newState = {};
    newState.checkerBoardInput = newCheckerBoardInput;
    newState.checkersLocation = this.checkersLocation(newCheckerBoardInput);

    this.setState(newState);
  }

  // Click on the checkers piece
  movePiece1(player, oldPieceRow, oldPieceColumn) {
    if (this.state.currentlyMoving[0] !== undefined && this.state.currentlyMoving[1] !== undefined) {
      return;
    }

    const checkersLocation = this.state.checkersLocation.slice();
    checkersLocation[oldPieceRow][oldPieceColumn].moving = true;

    const pieceToMove = [player, oldPieceRow, oldPieceColumn];

    this.setState({
      pieceToMove: pieceToMove,
      isMovingPiece: true,
      checkersLocation: checkersLocation
    });
  }

  movePiece2(newPieceRow, newPieceColumn) {
    if (this.state.isMovingPiece === false) return;
    const checkersLocation = this.state.checkersLocation.slice();
    if (checkersLocation[newPieceRow][newPieceColumn] !== '') {
      console.log('Piece there already');
      return;
    }

    console.log('here3');
    checkersLocation[this.state.pieceToMove[1]][this.state.pieceToMove[2]] = '';
    checkersLocation[newPieceRow][newPieceColumn] = this.state.pieceToMove[0];

    this.setState({
      checkersLocation: checkersLocation,
      isMovingPiece: false
    });
  }

  movePiece(player, oldPieceRow, oldPieceColumn, newPieceRow, newPieceColumn) {

  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{textAlign: 'center'}}>
            <CheckerBoardInput
              checkerBoardInput={this.state.checkerBoardInput}
              submitCheckerBoardInput={this.submitCheckerBoardInput}
            />
          </div>
          <CheckerBoard
            checkerBoardInput={this.state.checkerBoardInput}
            submitCheckerBoardInput={this.submitCheckerBoardInput}
            checkersLocation={this.state.checkersLocation}
            movePiece1={this.movePiece1}
            movePiece2={this.movePiece2}
          />
        </div>
      </div>
    )
  }
}
