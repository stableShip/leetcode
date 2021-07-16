/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsMap = {}
    for(let jewel of jewels){
        jewelsMap[jewel] = true
    }
    let num = 0
    for (const stone of stones) {
        if(jewelsMap[stone]){
            num++
        }
    }
    return num

};
// @lc code=end

