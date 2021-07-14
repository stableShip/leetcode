var detectCapitalUse = require('./520.检测大写字母')
var should = require('should')


describe("detectCapitalUse", () => {
    it("detectCapitalUse", () => {
        should.equal(false, detectCapitalUse("FlaG"))
        should.equal(true, detectCapitalUse("Leetcode"))
    })
})