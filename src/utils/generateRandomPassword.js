import crypto from 'crypto';
import alphabets from './alphabets';
import generateStaticPassword from './generateStaticPassword';

export default function generateRandomPassword(
  {
    iterations = 1,
    alphabet = alphabets.STRONG,
  } = {},
) {
  return generateStaticPassword({
    value: crypto.randomBytes(256),
    salt: crypto.randomBytes(256),
    alphabet,
    iterations,
  });
}
