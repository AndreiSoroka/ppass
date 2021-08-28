import generateRandomPassword from '../utils/generateRandomPassword.mjs';
import showPasswords from './helperShowPasswords.mjs';

export default async function stepGenerateRandomPassword() {
  await showPasswords(generateRandomPassword, {});
}
