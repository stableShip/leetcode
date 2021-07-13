var reverse = require('./7.整数反转')
var should = require('should')


describe("reverse", () => {
    it("reverse", () => {
        should.equal(321, reverse(123))
    })
})