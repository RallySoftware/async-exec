import { exec } from 'child_process';

function printLines(data: Object) {
  data.toString().split('\n').forEach(line => {
    console.log(line);
  });
}

export default function(command: string, logOutput: boolean = false): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const process = exec(command, (error: any, stdout: any, stderr: any) => {
      if (error) {
        return reject(error);
      } else {
        resolve(stdout);
      }
    });

    if (logOutput) {
      process.stdout.on('data', (data: Object) => printLines(data));
    }
  });
}
