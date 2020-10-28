import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([
    { secretWord, language: 'en' },
    jest.fn()
  ]);

  React.useReducer = mockUseReducer;

  return mount(<App />);
}

test('renders learn react link', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('', () => {
  test('', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  })
  test('', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  })
});

describe('', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup("party");
  })

  test('', () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.exists()).toBe(true);
  })
  test('', () => {
    const appComponent = findByTestAttr(wrapper, "spinner");
    expect(appComponent.exists()).toBe(false);
  })
})

describe('', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  })

  test('', () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.exists()).toBe(false);
  })
  test('', () => {
    const appComponent = findByTestAttr(wrapper, "spinner");
    expect(appComponent.exists()).toBe(true);
  })
})