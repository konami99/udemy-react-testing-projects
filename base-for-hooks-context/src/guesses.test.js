import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import successContext from './contexts/successContext';
import Input from './Input';
import { func } from 'prop-types';

function setup(secretWord='party') {
  const wrapper = mount(
    <successContext.SuccessProvider>
      <Input secretWord={secretWord} />
    </successContext.SuccessProvider>
  );

  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  return [wrapper, inputBox, submitButton];
}

describe('', () => {
  let wrapper;
  let inputBox;
  let submitButton;

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup('party');
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
  })
})