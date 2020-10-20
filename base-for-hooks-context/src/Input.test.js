import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord} />);
}

it('', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
})

test('', () => {
  checkProps(Input, { secretWord: 'party' });
})