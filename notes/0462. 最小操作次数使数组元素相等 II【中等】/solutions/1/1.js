/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b)
  const mid = nums[nums.length >> 1]
  let res = 0
  for (const num of nums) res += Math.abs(num - mid)
  return res
}
