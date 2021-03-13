import crypto from 'crypto';
import alphabets from './alphabets.js';


export default function generateStaticPassword(
  {
    value = '',
    salt = '',
    algorithm = 'sha512',
    keyLength = 256,
    alphabet = alphabets.STRONG,
    iterations = 100000,
  } = {}) {
  return [...crypto.pbkdf2Sync(value, salt, iterations, keyLength, algorithm)]
    .reduce((result, value, index) => {
      if (index % 16 === 0) {
        result.push(value);
      } else {
        result[result.length - 1] += value;
      }
      return result;
    }, [])
    .map(item => item <= alphabet.length ? alphabet[item] : alphabet[item % alphabet.length])
    .join('');
}
