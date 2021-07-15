/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let num = digits[digits.length - 1] + 1
    if (num === 10) {
        digits.concat([1, 0])
    } else {
        digits.concat([num])
    }
    return digits
};
// @lc code=end

