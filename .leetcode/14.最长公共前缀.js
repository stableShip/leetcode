/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let first = strs[0]
    let prefix = first
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i]
        for (let index = 0; index < prefix.length; index++) {
            const element = prefix[index];
            if (str[index] !== prefix[index]) {
                prefix = prefix.slice(0, index) || ""
            } else if (index > str.length) {
                prefix = prefix.slice(0, index - 1) || ""
            }
        }
    }
    return prefix

};
// @lc code=end

module.exports = longestCommonPrefix

