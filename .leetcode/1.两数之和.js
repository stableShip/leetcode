/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = {}
    for (let i = 0; i < nums.length; i++) {
        numMap[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        let otherNum = target - nums[i]
        if (numMap[otherNum] && i != numMap[otherNum]) {
            return [i, numMap[otherNum]]
        }
    }

};
// @lc code=end

