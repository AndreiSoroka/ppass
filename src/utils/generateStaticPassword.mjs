import crypto from 'crypto';
import alphabets from './alphabets.mjs';

export default function generateStaticPassword(
  {
    value = '',
    salt = '',
    algorithm = 'sha512',
    keyLength = 256,
    alphabet = alphabets.STRONG,
    iterations = 100000,
  } = {},
) {
  return [...crypto.pbkdf2Sync(value, salt, iterations, keyLength, algorithm)]
    .reduce((result, currentValue, index) => {
      if (index % 16 === 0) {
        result.push(currentValue);
      } else {
        // eslint-disable-next-line no-param-reassign
        result[result.length - 1] += currentValue;
      }
      return result;
    }, [])
    .map((item) => (item <= alphabet.length ? alphabet[item] : alphabet[item % alphabet.length]))
    .join('');
}
