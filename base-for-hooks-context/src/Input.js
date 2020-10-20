import React from 'react';
import PropTypes from 'prop-types';

function Input({ secretWord }) {

  const [ currentGuess, setCurrentGuess] = React.useState("");

  return <div data-test='component-input'>
    <form className="form-inline">
      <input data-test="input-box"
        type="text"
        placeholder="enter guess"
      />
      <button
        data-test="submit-button">
        Submit
      </button>
    </form>
  </div>
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;