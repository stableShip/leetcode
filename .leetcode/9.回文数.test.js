var isPalindrome = require('./9.回文数')
var should = require('should')


describe("isPalindrome", () => {
    it("isPalindrome", () => {
        should.equal(false, isPalindrome(-123))
    })
})