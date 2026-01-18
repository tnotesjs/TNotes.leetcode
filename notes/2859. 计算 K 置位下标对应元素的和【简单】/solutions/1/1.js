/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  // 计算一个数字的二进制表示中 1 的个数
  const countSetBits = (num) => {
    let count = 0
    while (num > 0) {
      count += num & 1
      num >>= 1
    }
    return count
  }

  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (countSetBits(i) === k) {
      sum += nums[i]
    }
  }

  return sum
}
