import { Command } from 'commander';
import prompts from 'prompts';
import { tokenExist } from './utils/token.mjs';
import promtSchema from './cli/promtSchema.mjs';
import stepConfigureWorkspace from './cli/stepConfigureWorkspace.mjs';
import stepGenerateRandomPassword from './cli/stepGenerateRandomPassword.mjs';
import stepGenerateStaticPassword from './cli/stepGenerateStaticPassword.mjs';

const program = new Command();

program.version(process.env.APP_VERSION);

program
  .option('-r, --random', 'generate random password')
  .option('-c, --configure', 'configure workspace (!important for the first run)');

program.parse(process.argv);
const options = program.opts();

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
  if (!tokenExist() && !options.configure) {
    const isContinue = await firstInitApplication();
    if (!isContinue) return;
  }

  if (options.random) {
    await stepGenerateRandomPassword();
  } else if (options.configure) {
    await stepConfigureWorkspace();
  } else {
    await stepGenerateStaticPassword();
  }
}

runCliPpass().then();
