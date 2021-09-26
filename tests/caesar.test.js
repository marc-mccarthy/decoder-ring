const { expect } = require("chai")
const { caesar } = require("../src/caesar")

// Write your tests here!
describe("caesar", () => {
    it("should return false if shift is 0", () => {
        const actual = caesar("hello-world", 0, encode = true)
        expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is less than -25", () => {
        const actual = caesar("hello-world", -30, encode = true)
        expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if shift is more than 25", () => {
        const actual = caesar("hello-world", 46, encode = true)
        expected = false
        expect(actual).to.equal(expected)
    })
    it("should return phrase with spaces", () => {
        const actual = caesar("hello world", 3, encode = true)
        expected = "khoor zruog"
        expect(actual).to.equal(expected)
    })
    it("should return phrase with no capital letters", () => {
        const actual = caesar("Hello World", 3, encode = true)
        expected = "khoor zruog"
        expect(actual).to.equal(expected)           
    })
})




