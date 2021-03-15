export default {
  password: {
    type: 'password',
    name: 'password',
    message: 'Type password',
  },
  setToken: {
    type: 'text',
    name: 'token',
    message: 'Type token',
  },
  configureOptions: {
    type: 'select',
    name: 'option',
    message: 'Pick configure option',
    choices: [
      {
        title: 'Generate new token',
        value: 'generate',
        description: 'The old token will be removed. You can not restore old passwords',
      },
      {
        title: 'Set token',
        description: 'Set new token',
        value: 'set',
      },
      {
        title: 'Get token',
        description: 'Get current token',
        value: 'get',
      },
      {
        title: 'Get token path',
        value: 'path',
      },
    ],
    initial: 0,
  },
  configureOptionsInit: {
    type: 'select',
    name: 'option',
    message: 'Pick configure option',
    choices: [
      {
        title: 'Generate new token',
        value: 'generate',
        description: 'We\'ll generate a token for you...',
      },
      {
        title: 'Set token',
        description: 'If you have a token (after migrating from another computer) or you would like to create a token yourself',
        value: 'set',
      },
    ],
    initial: 0,
  },
  usePasswords: {
    type: 'select',
    name: 'option',
    message: 'What do you want?',
    choices: [
      {
        title: 'Show passwords',
        value: 'show',
      },
      {
        title: 'Copy STRONG password',
        value: 'strong',
      },
      {
        title: 'Copy MIDDLE password',
        value: 'middle',
      },
      {
        title: 'Copy LIGHT password',
        value: 'light',
      },
    ],
    initial: 0,
  },
  continue: {
    type: 'confirm',
    name: 'value',
    message: 'Continue?',
    initial: true,
  },
};
