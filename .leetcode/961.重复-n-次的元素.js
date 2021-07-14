/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let countMap = {}
    for(let num of nums){
        countMap[num] = countMap[num] || 0
        countMap[num] = countMap[num]+1
        if(countMap[num]>1){
            return num
        }
    }

};
// @lc code=end

