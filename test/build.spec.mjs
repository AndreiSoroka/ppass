import assert from 'assert/strict';
import fs from 'fs';

describe('build', () => {
  it('package json version is equal build version', () => {
    const bundle = fs.readFileSync('./dist/cli/cli.bundle.js');
    const bundleVersion = bundle.toString().match(/version\("(.+?)"\)/)[1];

    const packageJson = fs.readFileSync('./package.json');
    const packageJsonVersion = JSON.parse(packageJson.toString()).version;

    assert.equal(
      bundleVersion,
      packageJsonVersion,
      'Expected build have correct version'
    )
  });
});
