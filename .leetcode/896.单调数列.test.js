var isMonotonic = require('./896.单调数列')
var should = require('should')


describe.only("isMonotonic", () => {
    it("isMonotonic", () => {
        should.equal(true, isMonotonic([3, 2, 1]))


        should.equal(true, isMonotonic([1, 2, 3]))

        should.equal(true, isMonotonic([1, 1, 1]))

        should.equal(false, isMonotonic([3, 1, 2]))


        should.equal(false, isMonotonic([1, 3, 0]))

        should.equal(false, isMonotonic([1, 1, 0]))


    })
})