import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import LanguagePicker from './LanguagePicker';

const mockSetLanguage = jest.fn();

const setup = () => {
  return shallow(<LanguagePicker setLanguage={mockSetLanguage} />);
}

test('', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-language-picker");
  expect(component.exists()).toBe(true);
});

test('', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test('', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, "language-icon");
  expect(languageIcons.length).toBeGreaterThan(0);
});

test('', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, "language-icon");

  const firstIcon = languageIcons.first();
  firstIcon.simulate("click");
  expect(mockSetLanguage).toHaveBeenCalled();
});