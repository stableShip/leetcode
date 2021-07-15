/*
 * @lc app=leetcode.cn id=1863 lang=javascript
 *
 * [1863] 找出所有子集的异或总和再求和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {

    let result = 0
    let xorResult = 0
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
        xorResult ^= nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i], nums[j], nums[i] ^ nums[j], 11111111111)

            result += nums[i] ^ nums[j]
        }
    }
    // console.log(result, 33333333)
    if (nums.length > 2) {
        result += xorResult
    }
    return result
};

var subSetAdd = function (pre, next, nums) {
    let result = nums[pre] ^ nums[next]

    if (nums[next + 1]) {
        result += subSetAdd(next, next + 1, nums)
        result += subSetAdd(pre, next + 1, nums)
    }
    return result
}


// @lc code=end

module.exports = subsetXORSum

