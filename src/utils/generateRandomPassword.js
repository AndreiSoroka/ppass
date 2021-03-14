import crypto from 'crypto';
import generateStaticPassword from './generateStaticPassword.js';
import alphabets from './alphabets.js';

export function generateRandomPassword1(
  {
    iterations = 1,
    alphabet = alphabets.STRONG
  } = {}
) {
  return generateStaticPassword({
    value: crypto.randomBytes(256),
    salt: crypto.randomBytes(256),
    alphabet,
    iterations,
  })
}
