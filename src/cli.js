import yargs from 'yargs'
import prompts from 'prompts'
import { hideBin } from 'yargs/helpers'
import generateStaticPassword from './utils/generateStaticPassword.js'
import { generateRandomPassword1 } from './utils/generateRandomPassword.js'
import alphabets from "./utils/alphabets.js";
import { setToken, getToken, getPathToken, generateNewToken, tokenExist } from "./utils/token.js";


const argv = yargs(hideBin(process.argv))
  .alias('h', 'help')
  .alias('v', 'version')
  .option('random', {
    alias: 'r',
    describe: 'Generate random password',
    type: 'boolean'
  })
  .option('configure', {
    alias: 'c',
    describe: 'Configure workspace (!important for first run)',
    type: 'boolean'
  })
  .argv;

const promtSchema = {
  password: {
    type: 'password',
    name: 'password',
    message: 'Type password'
  },
  setToken: {
    type: 'text',
    name: 'token',
    message: 'Type token'
  },
  configureOptions: {
    type: 'select',
    name: 'option',
    message: 'Pick option',
    choices: [
      {
        title: 'Generate new token',
        value: 'generate',
        description: 'The old token will be removed. You can not restore old passwords'
      },
      {
        title: 'Set token',
        description: 'Set new token',
        value: 'set'
      },
      {
        title: 'Get token',
        description: 'Get current token',
        value: 'get'
      },
      {
        title: 'Get token\'s path',
        value: 'path'
      },
    ],
    initial: 0
  },
  configureOptionsInit: {
    type: 'select',
    name: 'option',
    message: 'Pick option',
    choices: [
      {
        title: 'Generate new token',
        value: 'generate',
        description: 'We generated token for you...'
      },
      {
        title: 'Set token',
        description: 'If you have token (after migrate from another computer) or you would like create token myself',
        value: 'set'
      },
    ],
    initial: 0
  }

}

class CliPpass {
  constructor() {
    this.init().then()
  }

  async init() {
    if (!tokenExist() && !argv.configure) {
      console.log('Hello!');
      const result = await this.stepConfigureWorkspace();
      if (!result) {
        return;
      }
      console.log('______________');
      console.log('Good. You can check all commands --help');
      console.log('______________');
    }

    if (argv.random) {
      this.stepGenerateRandomPassword();
    } else if (argv.configure) {
      await this.stepConfigureWorkspace();
    } else {
      await this.stepGenerateStaticPassword();
    }
  }


  /**
   * Generate random password
   */
  stepGenerateRandomPassword() {
    this.showPasswords(generateRandomPassword1, {},);
  }

  /**
   * generate static password
   */
  async stepGenerateStaticPassword() {
    console.log('Your password:')
    const { password } = await prompts(promtSchema.password);

    this.showPasswords(
      generateStaticPassword,
      {
        value: password,
        salt: getToken(),
        algorithm: 'sha512',
      },
    );
  }

  async stepConfigureWorkspace() {
    const { option } = await prompts(tokenExist()
      ? promtSchema.configureOptions
      : promtSchema.configureOptionsInit);

    switch (option) {
      case 'set':
        console.log('set');
        const { token } = await prompts(promtSchema.setToken);
        setToken(token);
        break;
      case 'get':
        console.log('Your token:');
        console.log(getToken());
        break;
      case 'generate':
        console.log('One moment. We are creating new token for you...')
        const generatedToken = generateNewToken();
        if (!generatedToken) {
          return;
        }
        console.log(generatedToken)
        break;
      case 'path':
        console.log('File path:', getPathToken());
        break;
      default:
        break;
    }

    switch (option) {
      case 'set':
      case 'get':
      case 'generate':
        console.log('Save the token to a USB flash drive. Hide the flash drive in the pillow. Hide the pillow in the safe.');
        break;
      default:
        break;
    }

    return option;
  }

  showPasswords(fn, options) {
    console.log('Generated:');
    Object.keys(alphabets).forEach(key => {
      console.log(`${key}:`, fn({ ...options, alphabet: alphabets[key] }));
    });
  }
}

new CliPpass();
