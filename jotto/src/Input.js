import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGuess: null };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;
    if(guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' })
    }
  }

  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input value={this.state.currentGuess} onChange={(event) => this.setState({ currentGuess: event.target.value })} data-test="input-box" className="mb-2 mx-sm-3" type="text" />
          <button data-test="submit-button" type="submit" onClick={(event) => this.submitGuessedWord(event)}>Submit</button>
        </form>
      );
    return <div data-test="component-input">
      {contents}
    </div>
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);