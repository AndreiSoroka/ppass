import prompts from 'prompts';
import promtSchema from './promtSchema.mjs';
import generateStaticPassword from '../utils/generateStaticPassword.mjs';
import { getToken } from '../utils/token.mjs';
import showPasswords from './helperShowPasswords.mjs';

export default async function stepGenerateStaticPassword() {
  const { password } = await prompts(promtSchema.password);

  await showPasswords(
    generateStaticPassword,
    {
      value: password,
      salt: getToken(),
      algorithm: 'sha512',
    },
  );
}
