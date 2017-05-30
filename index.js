"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function printLines(data) {
    data.toString().split('\n').forEach(line => {
        console.log(line);
    });
}
function default_1(command, logOutput = false) {
    return new Promise((resolve, reject) => {
        const process = child_process_1.exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            else {
                resolve(stdout);
            }
        });
        if (logOutput) {
            process.stdout.on('data', (data) => printLines(data));
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map