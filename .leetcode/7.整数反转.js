/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = 0
    while (x != 0) {
        let temp = x % 10
        if (num>214748364 || (num==214748364 && temp>7)) {
            return 0;
        }
        //判断是否 小于 最小32位整数
        if (num<-214748364 || (num==-214748364 && temp<-8)) {
            return 0;
        }

        num = num * 10 + temp 
        x = parseInt(x/10)
    }
    return num
};
// @lc code=end




module.exports = reverse