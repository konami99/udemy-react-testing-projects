import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import guessedWordsContext from './contexts/guessedWordsContext';
import GuessedWords from './GuessedWords';
import successContext from './contexts/successContext';
import Input from './Input';
import { func } from 'prop-types';

function setup(guessedWordsStrings = [], secretWord='party') {
  const wrapper = mount(
    <guessedWordsContext.GuessedWordsProvider>
      <successContext.SuccessProvider>
        <Input secretWord={secretWord} />
        <GuessedWords />
      </successContext.SuccessProvider>
    </guessedWordsContext.GuessedWordsProvider>
  );

  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  // prepopulate guessedWords context by simulating word guess
  guessedWordsStrings.map(word => {
    const mockEvent = { target: { value: word } }
    inputBox.simulate('change', mockEvent);
    submitButton.simulate('click');
  })

  return [wrapper, inputBox, submitButton];
}

describe('', () => {
  let wrapper;
  let inputBox;
  let submitButton;

  describe('', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup(['agile'], 'party');
    })
  
    describe('', () => {
      beforeEach(() => {
        const mockEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
      })
  
      it('', () => {
        const inputComponent = findByTestAttr(wrapper, 'component-input');
        expect(inputComponent.children().length).toBe(0);
      })

      it('', () => {
        const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsTableRows.length).toBe(2);
      })
    })
  
    describe('', () => {
      beforeEach(() => {
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
      })
  
      it('', () => {
        expect(inputBox.exists()).toBe(true);
      })

      it('', () => {
        const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsTableRows.length).toBe(2);
      })
    })
  })

  describe('', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup([], 'party');
    })

    test('', () => {
      const mockEvent = { target: { value: 'train'} };
      inputBox.simulate('change', mockEvent);
      submitButton.simulate('click');
      const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsTableRows.length).toBe(1)
    })
  });
})