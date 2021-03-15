const { spawn } = require('child_process');

let isSupport = true;

const config = {
  command: '',
  args: [],
};
switch (process.platform) {
  case 'darwin':
    config.command = 'pbcopy';
    break;
  case 'win32':
    config.command = 'clip';
    break;
  case 'linux':
  case 'freebsd':
    config.command = 'xclip';
    config.args = ['-selection', 'clipboard'];
    break;
  default:
    isSupport = false;
}

export function isSupportNodeCopyToClipboard() {
  return isSupport;
}

export function CopyToClipboard(value) {
  if (!isSupport) {
    return Promise.reject();
  }

  return new Promise((resolve, reject) => {
    const proc = spawn(config.command, config.args);
    proc.on('error', (error) => {
      reject(error);
    });
    proc.on('close', () => {
      resolve();
    });
    proc.stdin.write(value);
    proc.stdin.end();
  });
}
