import prompts from 'prompts';
import {
  generateNewToken,
  getPathToken,
  getToken,
  setToken,
  tokenExist,
} from '../utils/token.mjs';
import promtSchema from './promtSchema.mjs';

export default async function stepConfigureWorkspace() {
  const { option } = await prompts(tokenExist()
    ? promtSchema.configureOptions
    : promtSchema.configureOptionsInit);

  switch (option) {
    case 'set': {
      const { token } = await prompts(promtSchema.setToken);
      setToken(token);
      break;
    }
    case 'get': {
      console.log('Your token:');
      console.log(getToken());
      break;
    }
    case 'generate': {
      console.log('One moment. We are creating new token for you...');
      const generatedToken = generateNewToken();
      if (!generatedToken) {
        return '';
      }
      console.log(generatedToken);
      break;
    }
    case 'path': {
      console.log('File path:', getPathToken());
      break;
    }
    default:
      break;
  }

  switch (option) {
    case 'set':
    case 'get':
    case 'generate':
      console.log('______________');
      console.log('Save the token to a USB flash drive. Hide the flash drive in the pillow. Hide the pillow in the safe.');
      console.log('More information: https://github.com/AndreiSoroka/ppass');
      break;
    default:
      break;
  }

  return option;
}
