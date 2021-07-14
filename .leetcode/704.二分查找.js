/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start

// var search = function (nums, target) {
//     let first = 0
//     let end = nums.length - 1
//     let middle = Math.floor(nums.length / 2)
//     while (first <= end) {
//         if (target === nums[middle]) {
//             return middle
//         } else if (target > nums[middle]) {
//             first = middle + 1
//         } else if (target < nums[middle]) {
//             end = middle - 1
//         }
//     }
//     return -1

// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    return binarySearch(nums, 0, nums.length - 1, target)
};

var binarySearch = function (nums, first, end, target) {
    if (first > end) {
        return -1
    }
    var middle = Math.floor((first + end) / 2)
    if (target === nums[middle]) {
        return middle
    } else if (target > nums[middle]) {
        first = middle + 1
    } else if (target < nums[middle]) {
        end = middle - 1
    }
    return binarySearch(nums, first, end, target)
}



// @lc code=end

