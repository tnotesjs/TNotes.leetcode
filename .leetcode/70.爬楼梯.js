/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 爬楼梯问题：每次可以爬 1 或 2 阶，求到第 n 阶有多少种方法
 * 动态规划，空间优化版
 * @param {number} n 楼梯阶数
 * @return {number} 方法总数
 */
var climbStairs = function(n) {
    // 前两阶直接返回
    if (n <= 2) return n;
    // a: 到第 1 阶的方法数，b: 到第 2 阶的方法数
    let a = 1, b = 2;
    // 从第 3 阶开始，迭代计算每一阶的方法数
    for (let i = 3; i <= n; i++) {
        let c = a + b; // 当前阶的方法数 = 前两阶之和
        a = b;         // 更新 a 为上一阶
        b = c;         // 更新 b 为当前阶
    }
    return b; // 返回第 n 阶的方法数
};
// 要到达第 n 阶，只能从第 n-1 阶走1步，或从第 n-2 阶走 2 步到达
// 因此，到达第 n 阶的方法数 = 到达第 n-1 阶的方法数 + 到达第 n-2 阶的方法数
// 即：f(n) = f(n-1) + f(n-2)
// @lc code=end

