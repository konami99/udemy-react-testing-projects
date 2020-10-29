import React from 'react';
import { shallow, mount } from 'enzyme';

import successContext from './successContext';

const FunctionalComponent = () => {
  successContext.useSuccess();
  return <div />
}

test('', () => {
  expect(() => {
    shallow(<FunctionalComponent />)
  }).toThrow('useSuccess must be used within a SuccessProvider');
})

test('', () => {
  expect(() => {
    mount(
      <successContext.SuccessProvider>
        <FunctionalComponent />
      </successContext.SuccessProvider>
    )
  }).not.toThrow();
})