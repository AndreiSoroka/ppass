import prompts from 'prompts';
import { CopyToClipboard, isSupportNodeCopyToClipboard } from '../utils/clipboard';
import promtSchema from './promtSchema';
import alphabets from '../utils/alphabets';

function copyToClipboard(value) {
  return CopyToClipboard(value)
    .then(() => {
      console.log('Copied to clipboard!');
      return true;
    })
    .catch(() => {
      console.error('Could not copy to clipboard! Sorry.,,');
      return false;
    });
}

export default async function showPasswords(fn, options) {
  let option = 'show';
  if (isSupportNodeCopyToClipboard()) {
    const userPasswords = await prompts(promtSchema.usePasswords);
    option = userPasswords.option;
  }

  switch (option) {
    case 'show':
      console.log('Generated:');
      Object.keys(alphabets).forEach((key) => {
        console.log(`${key}:`, fn({ ...options, alphabet: alphabets[key] }));
      });
      break;
    case 'strong':
      await copyToClipboard(fn({ ...options, alphabet: alphabets.STRONG }));
      break;
    case 'middle':
      await copyToClipboard(fn({ ...options, alphabet: alphabets.MIDDLE }));
      break;
    case 'light':
      await copyToClipboard(fn({ ...options, alphabet: alphabets.LIGHT }));
      break;
    default:
      break;
  }
}
