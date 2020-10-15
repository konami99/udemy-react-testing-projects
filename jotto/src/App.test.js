import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

test('', () => {
  const success = true;
  const wrapper = setup({ success });
  const successProp = wrapper.instance().props.success;
  expect(successProp).toBe(success);
});

test('', () => {
  const guessedWords = [ { guessedWord: 'train', letterMatchCount: 3  } ]
  const wrapper = setup({ guessedWords });
  const guessedWordsProp = wrapper.instance().props.guessedWords;
  expect(guessedWordsProp).toEqual(guessedWords);
});

test('', () => {
  const secretWord = 'party';
  const wrapper = setup({ secretWord });
  const secretWordProp = wrapper.instance().props.secretWord;
  expect(secretWordProp).toEqual(secretWord);
});

test('', () => {
  const wrapper = setup();
  const getSecretWordProp = wrapper.instance().props.getSecretWord;
  expect(getSecretWordProp).toBeInstanceOf(Function);
});