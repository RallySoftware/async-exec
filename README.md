# Async-Exec

Have you ever wanted to exec things asyncly? Now you can!

## Usage

`npm install -S async-exec`

Then in your code

    import exec from 'async-exec';
    
    await exec(`osascript -e "set volume ${scaledVolume}"`);
    const tsFiles = await exec(`find . -name "*.ts"`);
    
