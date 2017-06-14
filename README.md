# Async-Exec

![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)

Have you ever wanted to exec things asyncly? Now you can!

## Usage

`npm install -S async-exec`

Then in your code

    import exec from 'async-exec';

    await exec(`osascript -e "set volume ${scaledVolume}"`);
    const tsFiles = await exec(`find . -name "*.ts"`);

For tee-style logging, where the output is both sent to stdout as it arrives, and captured in the return value, set the second argument to `true`.

    exec('ls', true);

## Contributing

Go ahead and send me PRs. I love them. Especially if they contain tests and don't check in generated files.

Not sure how to fix it yourself? Submit an issue and we'll get it done eventually!
