/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 贪心 + 二分
  const tails = []
  for (const num of nums) {
    let lo = 0,
      hi = tails.length
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (tails[mid] < num) lo = mid + 1
      else hi = mid
    }
    tails[lo] = num
  }
  return tails.length
}
