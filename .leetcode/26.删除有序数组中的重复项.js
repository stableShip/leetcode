/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0
    for(; i<nums.length; i++){
        let j = i++
        while(nums[j] && nums[i] !== nums[j]){
           nums[i] = nums[j]
           i++
        }
    }
    return i
 
};
// @lc code=end

