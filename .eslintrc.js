module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'airbnb-base',
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  'env': {
    'node': true,
    'es6': true
  },
  'plugins': [
    'sonarjs',
  ],
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
  }
}
