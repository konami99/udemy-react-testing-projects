import React from 'react';
import { mount } from 'enzyme';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import guessedWordsContext from './contexts/guessedWordsContext';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const setup = ({language, secretWord, success}) => {
  secretWord = secretWord || 'party';
  language = language || 'en';
  success = success || false;

  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <guessedWordsContext.GuessedWordsProvider>
          <Input secretWord={secretWord} />
        </guessedWordsContext.GuessedWordsProvider>
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
}

describe('', () => {
  test('', () => {
    const wrapper = setup({});
    const submitButtonComponent = findByTestAttr(wrapper, "submit-button");
    expect(submitButtonComponent.text()).toBe('Submit');
  });

  test('', () => {
    const wrapper = setup({ language: 'emoji' });
    const submitButtonComponent = findByTestAttr(wrapper, "submit-button");
    expect(submitButtonComponent.text()).toBe('🚀');
  });
})

it('', () => {
  const wrapper = setup({});
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
})

test('', () => {
  checkProps
  (Input, { secretWord: 'party' });
})

describe('', () => {
  let mockSetCurrentGuess = jest.fn();;
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({});
  })

  it('', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate("change", mockEvent);
    
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  })

  it('', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate("click", { preventDefault() {} });
    
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  })
});

test('', () => {
  const wrapper = setup({ secretWord: 'party', success: true });
  expect(wrapper.isEmptyRender()).toBe(true);
})