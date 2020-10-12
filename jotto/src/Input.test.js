import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';

import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

setup();

describe('', () => {
  describe('', () => {
    test('', () => {

    })

    test('', () => {
      
    })

    test('', () => {
      
    })
  });

  describe('', () => {
    test('', () => {

    })

    test('', () => {
      
    })

    test('', () => {
      
    })
  });
});
