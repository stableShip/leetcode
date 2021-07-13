/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x<0) {
        return false
    }
    if (reverse(x) === x) {
        return true
    }
    return false
};

var reverse = function (x) {
    let num = 0
    while (x != 0) {
        let temp = x % 10
        if (num > 214748364 || (num == 214748364 && temp > 7)) {
            return 0;
        }
        //判断是否 小于 最小32位整数
        if (num < -214748364 || (num == -214748364 && temp < -8)) {
            return 0;
        }

        num = num * 10 + temp
        x = parseInt(x / 10)
    }
    return num
};

module.exports = isPalindrome
// @lc code=end

