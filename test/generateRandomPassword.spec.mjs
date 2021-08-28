import assert from 'assert/strict';
import generateRandomPassword from "../src/utils/generateRandomPassword.mjs";

describe('generateRandomPassword', () => {
  it('should pass without equals passwords', () => {
    const PASSWORDS_COUNT = 10000;
    const passwords = [...new Set(new Array(PASSWORDS_COUNT)
      .fill(null)
      .map(() => generateRandomPassword())
      .filter(item => item))];
    assert.equal(
      passwords.length,
      PASSWORDS_COUNT,
    )
  });
});
