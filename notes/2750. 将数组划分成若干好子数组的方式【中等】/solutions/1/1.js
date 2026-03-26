/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function (nums) {
  const MOD = 1e9 + 7
  let prev = -1 // 上一个 1 的位置
  let res = 1
  let found = false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (found) {
        res = (res * (i - prev)) % MOD
      }
      prev = i
      found = true
    }
  }
  return found ? res : 0
}
