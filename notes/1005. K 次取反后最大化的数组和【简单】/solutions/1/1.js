/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // 升序
  nums.sort((a, b) => a - b)

  let sum = 0
  let minAbs = Infinity
  for (let i = 0; i < nums.length; i++) {
    // 优先把负数取反，消耗一次操作
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
    sum += nums[i]
    // 记录绝对值最小值，便于最后奇数次余量再取反
    if (Math.abs(nums[i]) < minAbs) minAbs = Math.abs(nums[i])
  }
  // 若还剩奇数次操作，则取反绝对值最小的数
  if (k % 2 === 1) sum -= 2 * minAbs
  return sum
}
