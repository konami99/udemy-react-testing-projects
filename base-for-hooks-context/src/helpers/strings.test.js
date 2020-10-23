import stringsModule from './strings';
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀' },
  mermish: {},
}

test('', () => {
  const string = getStringByLanguage('en', 'submit', strings);
  expect(string).toBe('submit');
});

test('', () => {
  const string = getStringByLanguage('emoji', 'submit', strings);
  expect(string).toBe('🚀');
});

test('', () => {
  const string = getStringByLanguage('notALanguage', 'submit', strings);
  expect(string).toBe('submit');
});

test('', () => {
  const string = getStringByLanguage('mermish', 'submit', strings);
  expect(string).toBe('submit');
});