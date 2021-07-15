var subsetXORSum = require('./1863.找出所有子集的异或总和再求和')
var should = require('should')


describe("subsetXORSum", () => {
    it("subsetXORSum", () => {
        // should.equal(28, subsetXORSum([5, 1, 6]))
        // should.equal(6, subsetXORSum([1, 3]))
        should.equal(480, subsetXORSum([3, 4, 5, 6, 7, 8]))
    })
})