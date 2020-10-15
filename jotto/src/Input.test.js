import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';

import Input, { UnconnectedInput } from './Input';
import { guessWord } from './actions';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('', () => {
  describe('', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })

    test('', () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    })

    test('', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    })

    test('', () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    })
  });

  describe('', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })
    test('', () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    })

    test('', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    })

    test('', () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    })
  });
});

describe('', () => {
  test('', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    }
    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.setState({ currentGuess: guessedWord });
    const component = findByTestAttr(wrapper, "submit-button");
    component.simulate("click", { preventDefault() {} });
  })

  test('', () => {
    expect(guessWordMock.mock.calls.length).toBe(1);
  });

  test('', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
})
