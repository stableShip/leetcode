/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return business(num)
};

var business = function(nums){
    nums = nums.toString()
    let result = 0
    for(let num of  nums){
        result += parseInt(num)
    }
    if(result>9){
        result = business(result)
    }
    return result
}
// @lc code=end

module.exports = addDigits

