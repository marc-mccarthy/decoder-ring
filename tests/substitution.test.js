const { expect } = require("chai")
const { substitution } = require("../src/substitution")

// Write your tests here!
describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const expected = false
        const actual = substitution("jiggle", false ,true)
        expect(actual).to.equal(expected)
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const expected = false
        const actual = substitution("jiggle jiggle", "123456789", true)
        expect(actual).to.equal(expected)
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const expected = false
        const actual = substitution("jiggle", "12345123451234512345123451", true)
        expect(actual).to.equal(expected)
    })
    it("should work with any kind of key with unique characters", () => {
        const expected = "))!pvsso?(("
        const actual = substitution("))!hello?((", "1234567890asdfghjklqwertyu", false)
        expect(actual).to.equal(expected)
    })
    it("should preserve spaces", () => {
        const expected = "))!pvsso uowsm?(("
        const actual = substitution("))!hello world?((", "1234567890asdfghjklqwertyu" , false)
        expect(actual).to.equal(expected)
    })
}); 