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
    // 对比日期与第一天时间戳差距， 再除以 每天的时间戳， 得到多少天， 例如： （3 - 1） / 1 = 2 ， 再 + 1 = 3
    return (new Date(date) - new Date(year+"-01-01")) / 864e5 + 1
};
// @lc code=end

