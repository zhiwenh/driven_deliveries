import React, { Component } from 'react';
import CheckerBoard from '../components/checkerBoard'
import CheckerBoardInput from '../components/checkerBoardInput'
import RadioButtonsShape from '../components/radioButtonsShape'
import TopRadioButtonsColor from '../components/topRadioButtonsColor'
import BottomRadioButtonsColor from '../components/bottomRadioButtonsColor'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkerBoardInput: 8,
      pieceToMove: [undefined, undefined, undefined],
      isMovingPiece: false,
      turn: 1,
      shape: 'circle',
      topColor: 'red',
      bottomColor: 'black'
    }

    this.state.checkersLocation = this.checkersLocation(8);

    this.submitCheckerBoardInput = this.submitCheckerBoardInput.bind(this);
    this.movePiece1 = this.movePiece1.bind(this);
    this.movePiece2 = this.movePiece2.bind(this);
    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.changeShape = this.changeShape.bind(this);
    this.topColor = this.topColor.bind(this);
    this.bottomColor = this.bottomColor.bind(this);

  }

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('savedGame'));
    this.setState(savedState);

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
          checkersLocation[i].push('');
        }
      }
    }

    return checkersLocation;
  }

  save() {
    localStorage.setItem('savedGame', JSON.stringify(this.state));
  }

  reset() {
    localStorage.removeItem('savedGame');
    this.setState({
      pieceToMove: [undefined, undefined, undefined],
      isMovingPiece: false,
      turn: 1,
      checkersLocation: this.checkersLocation(this.state.checkerBoardInput)
    })
  }

  changeShape(shape) {
    this.setState({
      shape: shape
    });
  }

  topColor(color) {
    this.setState({
      topColor: color
    });
  }

  bottomColor(color) {
    this.setState({
      bottomColor: color
    });
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
    if (Number(player) !== this.state.turn) return;

    const checkersLocation = this.state.checkersLocation.slice();

    if (this.state.pieceToMove[1] === oldPieceRow && this.state.pieceToMove[2] === oldPieceColumn) {
      checkersLocation[oldPieceRow][oldPieceColumn].moving = false;
      if (checkersLocation[Number(oldPieceRow) + 1][Number(oldPieceColumn) + 1] === 'suggested') {
        checkersLocation[Number(oldPieceRow) + 1][Number(oldPieceColumn) + 1] = '';
      }

      if (checkersLocation[Number(oldPieceRow) + 1][Number(oldPieceColumn) - 1] === 'suggested') {
        checkersLocation[Number(oldPieceRow) + 1][Number(oldPieceColumn) - 1] = '';
      }

      this.setState({
        pieceToMove: [undefined, undefined, undefined],
        isMovingPiece: false,
        checkersLocation: checkersLocation
      });
      return;
    }

    if (this.state.isMovingPiece === true) {
      return;
    }

    const pieceToMove = [player, oldPieceRow, oldPieceColumn];
    checkersLocation[oldPieceRow][oldPieceColumn].moving = true;

    if (player === '1') {
      if (checkersLocation[oldPieceRow + 1][oldPieceColumn + 1] === '') {
        checkersLocation[Number(oldPieceRow) + 1][Number(oldPieceColumn) + 1] = 'suggested';
      }

      if (checkersLocation[oldPieceRow + 1][oldPieceColumn - 1] === '') {
        checkersLocation[Number(oldPieceRow) + 1][Number(oldPieceColumn) - 1] = 'suggested';
      }
    }

    if (player === '2') {
      if (checkersLocation[oldPieceRow - 1][oldPieceColumn - 1] === '') {
        checkersLocation[Number(oldPieceRow) - 1][Number(oldPieceColumn) - 1] = 'suggested';
      }

      if (checkersLocation[oldPieceRow - 1][oldPieceColumn + 1] === '') {
        checkersLocation[Number(oldPieceRow) - 1][Number(oldPieceColumn) + 1] = 'suggested';
      }
    }
    let turn = this.state.turn;

    if (turn === 1) {
      turn = 2;
    } else {
      turn = 1
    }

    this.setState({
      pieceToMove: pieceToMove,
      isMovingPiece: true,
      checkersLocation: checkersLocation,
      turn: turn
    });
  }

  movePiece2(newPieceRow, newPieceColumn) {
    if (this.state.isMovingPiece === false) return;

    const checkersLocation = this.state.checkersLocation.slice();

    if (checkersLocation[newPieceRow][newPieceColumn] !== '' && checkersLocation[newPieceRow][newPieceColumn] !== 'suggested') {
      return;
    }

    if (this.state.pieceToMove[0] === '1') {
      if (checkersLocation[Number(this.state.pieceToMove[1]) + 1][Number(this.state.pieceToMove[2]) + 1] === 'suggested') {
        checkersLocation[Number(this.state.pieceToMove[1]) + 1][Number(this.state.pieceToMove[2]) + 1] = '';
      }
      if (checkersLocation[Number(this.state.pieceToMove[1]) + 1][Number(this.state.pieceToMove[2]) - 1] === 'suggested') {
        checkersLocation[Number(this.state.pieceToMove[1])  + 1][Number(this.state.pieceToMove[2]) - 1] = '';
      }
    }

    if (this.state.pieceToMove[0] === '2') {
      if (checkersLocation[Number(this.state.pieceToMove[1]) - 1][Number(this.state.pieceToMove[2]) - 1] === 'suggested') {
        checkersLocation[Number(this.state.pieceToMove[1]) - 1][Number(this.state.pieceToMove[2]) - 1] = '';
      }
      if (checkersLocation[Number(this.state.pieceToMove[1]) - 1][Number(this.state.pieceToMove[2]) + 1] === 'suggested') {
        checkersLocation[Number(this.state.pieceToMove[1])  - 1][Number(this.state.pieceToMove[2]) + 1] = '';
      }
    }

    checkersLocation[this.state.pieceToMove[1]][this.state.pieceToMove[2]] = '';
    checkersLocation[newPieceRow][newPieceColumn] = {player: this.state.pieceToMove[0], moving: false};

    this.setState({
      checkersLocation: checkersLocation,
      isMovingPiece: false
    });
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
            <div>
              <button onClick={this.save}>Save</button>
              <button onClick={this.reset}>Reset</button>
            </div>
            <div>
              <RadioButtonsShape changeShape={this.changeShape}/>
            </div>
            <div>
              <TopRadioButtonsColor topColor={this.topColor}/>
            </div>
            <div>
              <BottomRadioButtonsColor bottomColor={this.bottomColor}/>
            </div>
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
