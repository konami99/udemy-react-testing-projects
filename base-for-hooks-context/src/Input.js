import React from 'react';
import PropTypes from 'prop-types';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import stringsModule from './helpers/strings';

function Input({ secretWord }) {
  const language = React.useContext(languageContext);
  const [success, setSuccess] = successContext.useSuccess();
  const [ currentGuess, setCurrentGuess] = React.useState("");

  if (success) { return null }
  return <div data-test='component-input'>
    <form className="form-inline">
      <input data-test="input-box"
        type="text"
        placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
        value={currentGuess}
        onChange={(event) => setCurrentGuess(event.target.value)}
      />
      <button
        data-test="submit-button"
        onClick={(event) => {
          event.preventDefault(); 
          if (currentGuess === secretWord) {
            setSuccess(true);
          }

          setCurrentGuess('');
        }}>
        {stringsModule.getStringByLanguage(language, 'submit')}
      </button>
    </form>
  </div>
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input;