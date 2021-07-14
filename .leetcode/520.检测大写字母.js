/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let allUp = true, allLow = true, onlyFirst = true

    for (let i = 0; i < word.length; i++) {
        let charCode = word[i].charCodeAt()
        // A-Z 对应的 Unicode 编码是 65 - 90
        // a-z 对应的 Unicode 编码是 97 - 122
        if (charCode >= 65 && charCode <= 90) {
            allLow = false
        }
        if (charCode >= 97 && charCode <= 122) {
            allUp = false
        }
        if (i > 0 && charCode >= 65 && charCode <= 90) {
            onlyFirst = false
        }
    }
    return allUp || allLow || onlyFirst

};
// @lc code=end

module.exports = detectCapitalUse

