import generateRandomPassword from '../utils/generateRandomPassword';
import showPasswords from './helperShowPasswords';

export default async function stepGenerateRandomPassword() {
  await showPasswords(generateRandomPassword, {});
}
