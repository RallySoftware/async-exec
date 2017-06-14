import exec from '../index'
import { assert } from 'chai'

describe("async exec", () => {
  const cmd = 'node logger'
  const expected = 'hello\n'

  describe("by default", () => {
    it("should return expected output", async () => {
      assert.equal(await exec(cmd), expected)
    })
  })

  describe("when asked to print the output as it's received", () => {
    it("should also print the output", async () => {
      assert.equal(await exec(cmd, true), expected)
    })
  })
})
