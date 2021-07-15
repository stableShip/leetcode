/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let year = date.split("-")[0]
    return (new Date(date) - new Date(year+"-01-01")) / 864e5 + 1
};
// @lc code=end

