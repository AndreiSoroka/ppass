import assert from 'assert/strict';
import alphabets from '../src/utils/alphabets.mjs';

describe('alphabets', () => {
  it('should have 3 difficulty levels', () => {
    assert.deepEqual(
      Object.keys(alphabets).sort(),
      ['STRONG', 'MIDDLE', 'LIGHT'].sort(),
    )
  });
});
