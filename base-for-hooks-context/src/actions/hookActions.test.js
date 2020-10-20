import moxios from 'moxios';
import { italics } from 'prop-types/lib/ReactPropTypesSecret';

import { getSecretWord } from './hookActions';

describe('', () => {
  beforeEach(() => {
    moxios.install();
  })
  afterEach(() => {
    moxios.uninstall();
  })


  it('', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  })
})
  