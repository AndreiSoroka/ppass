# ppass

Console password manager without storage.

Utility for generating private passwords instead of storing them for the paranoid.

### What problem does it solve?
You get the opportunity to create **strong and unique crypto-proof passwords**.

This utility is especially for you if you don’t want to:
- Remember all your passwords
- Store them in browsers (like Google Chrome, Safari, Mozilla FireFox etc.)
- Store them in password managers (like KeePass, LastPass и 1Password etc.)

### Usage example
You go to the site "my-space.duck" and want to sign up

Run **ppass** and enter
```text
> Type password: my-space andrei
```
Designation:
- "my-space" - site name
- "andrei" - a code word for easy memorization

`site name` + `code word` = `master-password`.

It is just example.
You can use any text as master-password.

```text
Your password:
✔ Type password … ***
Generated:
STRONG: /D^T+OaN^tYFJ@N!
MIDDLE: a2tpUfZlLq4DPSwF
LIGHT: UbFnnEmOZdsaOQxH
```

after that you go to the site "bank.duck" and want to sign up
```text
> Type password: bank andrei
✔ Type password … ***
Generated:
STRONG: BrXr#&b)U-oeO!&X
MIDDLE: ujqyLJ0NLtt617Cu
LIGHT: NmUKuYwfwfjXPlas
```

back to "my-space.duck" and again:
```text
STRONG: /D^T+OaN^tYFJ@N!
MIDDLE: a2tpUfZlLq4DPSwF
LIGHT: UbFnnEmOZdsaOQxH
```


Designation:

**Strong** - password have letters, numbers and special chars.
5072820298953863752478356399681 values for brute-force.

**Middle** - password have letters and numbers.
61581291280182164914327485441  values for brute-force.

**Light** - password have only letters.
3876269050118516845397872321 values for brute-force.

## Install
```bash
# install global
npm i ppass -g
ppass

# use npx
npx ppass
```

## All commands
```text
ppass -h
-r, --random     Generate random password                            [boolean]
-c, --configure  Configure workspace (!important for first run)      [boolean]
-h, --help       Show help                                           [boolean]
-v, --version    Show version number                                 [boolean]
```

## Migrate to another computer
If you want the **ppass** to generate the same passwords on another computer then
```bash
# run command
ppass -c
# select
> get token
# copy token (for example to USB flash drive as txt)
```
or
```bash
# run command
ppass -c
# select
> get token\'s path
# copy token file to USB flash drive
```
After then in new computer select `set token`

### Additional information

If you'll lose a token, it'll impossible to recover your password!

If your token will be stolen, it'll too difficult to generate required passwords without your master-password!

If anyone finds out your master-password, they can’t generate similar without token


!imporant! Enable encryption of the user's folder on the computer

Moral:
This utility generates **unique and complex passwords** from easy-to-remember master-passwords.

Get enjoy!

