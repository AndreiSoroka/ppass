import prompts from 'prompts';
import promtSchema from './promtSchema';
import generateStaticPassword from '../utils/generateStaticPassword';
import { getToken } from '../utils/token';
import showPasswords from './helperShowPasswords';

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
