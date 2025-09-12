/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1
  let right = n

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    const result = guess(mid)

    if (result === 0) {
      return mid // 猜对了
    } else if (result === -1) {
      right = mid - 1 // 猜的数字太大，往左找
    } else {
      left = mid + 1 // 猜的数字太小，往右找
    }
  }

  return -1 // 理论上不会执行到这里
}
// @lc code=end
