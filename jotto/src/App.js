import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  };
}

const mapStateToProps = ({success, secretWord, guessedWords}) => {
  return { success, secretWord, guessedWords };
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
