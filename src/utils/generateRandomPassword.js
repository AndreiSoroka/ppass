import generateStaticPassword from './generateStaticPassword.js';
import alphabets from './alphabets.js';

export function generateRandomPassword1(
  {
    iterations= 100000,
    alphabet = alphabets.STRONG
  } = {}
) {
  return generateStaticPassword({
    value: Math.random().toString(24),
    salt: Date.now().toString(24),
    alphabet,
    iterations,
  })
}
