import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('', () => {
  const newState = successReducer(undefined, {})
  expect(newState).toBe(false);
});

test('', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  expect(newState).toBe(true);
});

test('', () => {

});