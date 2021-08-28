import crypto from 'crypto';
import alphabets from './alphabets.mjs';
import generateStaticPassword from './generateStaticPassword.mjs';

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
