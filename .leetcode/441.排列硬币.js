/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 1
  let right = n

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let coinsNeeded = (mid * (mid + 1)) / 2

    if (coinsNeeded === n) {
      return mid
    } else if (coinsNeeded < n) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
}
// @lc code=end

arrangeCoins(5)
