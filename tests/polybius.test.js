const { expect } = require("chai")
const { polybius } = require("../src/polybius")

// Write your tests here!
describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const expected = '424222221351'
        const actual = polybius("jiggle", true)
        expect(actual).to.equal(expected)
    });
    it("should leave spaces as is when encoding", () => {
        const expected = '424222221351 424222221351'
        const actual = polybius("jiggle jiggle", true)
        expect(actual).to.equal(expected)
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = '424222221351'
        const actual = polybius("jiggle", true)
        expect(actual).to.equal(expected)
    })
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "hello"
        const actual = polybius("3251131343", false)
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is when decoding", () => {
        const expected = "hello world"
        const actual = polybius("3251131343 2543241341", false)
        expect(actual).to.equal(expected)
    })
}); 