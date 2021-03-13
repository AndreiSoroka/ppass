export default function generateStaticPassword(
  {
    value = '',
    salt = '',
    algorithm = 'sha512',
    keyLength = 256,
    alphabet = alphabets.STRONG,
  } = {}) {
  return [...crypto.pbkdf2Sync(value, salt, 100000, keyLength, algorithm)]
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
