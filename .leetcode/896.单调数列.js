/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {

    let up = true, down = true

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 >= nums.length) {
            break
        }
        let result = nums[i + 1] - nums[i] || 0
        if (result > 0) {
            down = false
        }
        if(result < 0){
            up = false
        }
        if(!up && !down){
            break
        }
    }
    return up || down

};
// @lc code=end

module.exports = isMonotonic

