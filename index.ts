import { exec } from 'child_process';

export default async function(command: string, logOutput: boolean = false): Promise<string> {
  return logOutput ? execAndLog(command) : execWithCallbackOnData(command);
}

export async function execAndLog(command: string): Promise<string> {
  return execWithCallbackOnLine(command, console.log);
}

export async function execWithCallbackOnLine(command: string, funcForLine: (line: string) => any): Promise<string> {
  return execWithCallbackOnData(command, (data: Object) => {
    data.toString().split('\n').forEach(line => funcForLine(line));
  });
}

export async function execWithCallbackOnData(command: string, funcForData: ((data: Object) => any) = null): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const process = exec(command, (error: any, stdout: any, stderr: any) => {
      if (error) {
        return reject(error);
      } else {
        resolve(stdout);
      }
    });

    if (funcForData) {
      process.stdout.on('data', funcForData);
    }
  });
}
