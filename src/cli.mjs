import yargs from 'yargs';
import prompts from 'prompts';
import { hideBin } from 'yargs/helpers';
import { tokenExist } from './utils/token.mjs';
import promtSchema from './cli/promtSchema.mjs';
import stepConfigureWorkspace from './cli/stepConfigureWorkspace.mjs';
import stepGenerateRandomPassword from './cli/stepGenerateRandomPassword.mjs';
import stepGenerateStaticPassword from './cli/stepGenerateStaticPassword.mjs';

function setOptionDefault(options) {
  return (options.includes(process.env.APP_OPTION) && { default: true });
}

const { argv } = yargs(hideBin(process.argv))
  .option('help', {
    alias: 'h',
    ...setOptionDefault(['h', 'help']),
  })
  .option('version', {
    alias: 'v',
    ...setOptionDefault(['v', 'version']),
  })
  .option('random', {
    alias: 'r',
    describe: 'Generate random password',
    type: 'boolean',
    ...setOptionDefault(['r', 'random']),
  })
  .option('configure', {
    alias: 'c',
    describe: 'Configure workspace (!important for the first run)',
    type: 'boolean',
    ...setOptionDefault(['c', 'configure']),
  });

async function firstInitApplication() {
  console.log('Hello!');

  const result = await stepConfigureWorkspace();
  if (!result) {
    return false;
  }

  console.log('______________');
  const { value } = await prompts(promtSchema.continue);
  console.log('Good');
  if (!value) {
    console.log('Bye!');
    return false;
  }

  return true;
}

async function runCliPpass() {
  if (!tokenExist() && !argv.configure) {
    const isContinue = await firstInitApplication();
    if (!isContinue) return;
  }

  if (argv.random) {
    await stepGenerateRandomPassword();
  } else if (argv.configure) {
    await stepConfigureWorkspace();
  } else {
    await stepGenerateStaticPassword();
  }
}

runCliPpass().then();
