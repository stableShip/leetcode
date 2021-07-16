var longestCommonPrefix = require('./14.最长公共前缀')
var should = require('should')


describe.only("longestCommonPrefix", () => {
    it("longestCommonPrefix", () => {
        should.equal('fl', longestCommonPrefix(["flower", "flow", "flight"]))
        should.equal('a', longestCommonPrefix(["ab", "a"]))
    })
})