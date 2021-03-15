import fs from 'fs';
import path from 'path';
import getAppDataPath from 'appdata-path';
import generateRandomPassword from './generateRandomPassword';

const appDataPath = getAppDataPath();
const appPath = path.join(appDataPath, '.ppass');
const filePath = path.join(appPath, '.token');

export function permissionErrorLog() {
  console.error('> To set a new token, you must have permissions');
  console.error(`>   remove with sudo: ${filePath}`);
}

// possible for clear docker container
if (!fs.existsSync(appDataPath)) {
  fs.mkdirSync(appDataPath);
}
// first start app
if (!fs.existsSync(appPath)) {
  fs.mkdirSync(appPath);
}

function changePermission(permission = 0o400) {
  const fd = fs.openSync(filePath, 'r');
  fs.fchmodSync(fd, permission);
}

export function tokenExist() {
  return fs.existsSync(filePath);
}

export function setToken(token = '') {
  if (tokenExist()) {
    permissionErrorLog();
    return;
  }

  fs.writeFileSync(filePath, token);
  changePermission(0o400);
}

export function getToken() {
  const token = fs.readFileSync(filePath);
  return token.toString();
}

export function getPathToken() {
  return filePath;
}

export function generateNewToken() {
  if (tokenExist()) {
    permissionErrorLog();
    return '';
  }

  const generatedToken = new Array(100)
    .fill(null)
    .map(() => generateRandomPassword())
    .join('');
  setToken(generatedToken);
  return generatedToken;
}
