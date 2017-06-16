import exec, { execWithCallbackOnLine } from '../index';
import { assert } from 'chai';

const cmd = 'node logger'; // this runs the compiled logger.ts in the root dir
const expectedLines = ['hello', ''];
const expectedOutput = expectedLines.join('\n');

describe("#exec", () => {
  describe("by default", () => {
    it("should return expected output", async () => {
      assert.equal(await exec(cmd), expectedOutput);
    })
  })

  describe("with true passed on the second arg", () => {
    it("^ should say hello from the console.log", async () => {
      await exec(cmd, true);
    })
  })
});

describe("#execWithCallbackOnLine", () => {
  it("should call the function with each line of output", async () => {
    const actualLines: any[] = [];
    await execWithCallbackOnLine(cmd, (loggedLine) => {
      actualLines.push(loggedLine);
    });
    assert.deepEqual(actualLines, expectedLines);
  });
});
