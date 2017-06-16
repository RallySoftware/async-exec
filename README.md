# Async-Exec

![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)

Have you ever wanted to exec things asyncly? Now you can!


## Usage

`npm install -S async-exec`

Then in your code use any of the following patterns:


### Default

The default export is intended to be pretty convenient.

    import exec from 'async-exec';


#### exec(command: string, log: boolean)

Run a single command expressed as a string and return the stdout when complete.

    await exec(`osascript -e "set volume ${scaledVolume}"`);
    const tsFiles = await exec(`find . -name "*.ts"`);

For tee-style logging, where the output is both sent to stdout as it arrives, and captured in the return value, set the second argument to `true`.

    exec('ls', true);


### Other Exports

These other functions are provided in case they are useful.


#### execAndLog(command: string)

In addition to returning the stdout, this function will console.log each line.


#### execWithCallbackOnLine(command: string, funcForLine: (line: string) => any)

Run a command, return the stdout and call a function for each line of output. You could use this to console.log only the lines you want.


#### execWithCallbackOnData(command: string, funcForData: ((data: Object) => any) = null)

Run a command, return stdout and call a function on every 'data' event. This function gives you access to the raw data which you can parse any way you'd like for your situation.


## Contributing

Go ahead and send me PRs. I love them. Especially if they contain tests and don't check in generated files.

Not sure how to fix it yourself? Submit an issue and we'll get it done eventually!


### Publishing

Mostly for my own recollection, publishing goes like this.

    <commit changes>
    npm version <major|minor|patch>
    git push origin master
    npm publish
