/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  const mask = (1 << maximumBit) - 1
  let xor = 0
  for (const x of nums) xor ^= x
  const ans = []
  for (let i = nums.length - 1; i >= 0; i--) {
    ans.push(xor ^ mask)
    xor ^= nums[i]
  }
  return ans
}
