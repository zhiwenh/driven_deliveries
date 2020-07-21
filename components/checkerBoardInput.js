import React, { Component } from 'react';

export default class CheckerBoardInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkerBoardInput: this.props.checkerBoardInput
    }

    this.changeCheckBoardInput = this.changeCheckBoardInput.bind(this);
  }

  changeCheckBoardInput(e) {
    this.setState({
      checkerBoardInput: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.checkerBoardInput}
            onChange={this.changeCheckBoardInput}
          />
          <button onClick={(e) => {
            e.preventDefault();
            this.props.submitCheckerBoardInput(this.state.checkerBoardInput, e)
          }}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
