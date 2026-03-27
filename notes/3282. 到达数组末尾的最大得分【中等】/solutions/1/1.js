/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
  // 从 i 跳到 j：得分 (j-i)*nums[i]
  // 贪心：始终在遇到更大值时跳
  let score = 0n
  let maxVal = BigInt(nums[0])
  for (let i = 1; i < nums.length; i++) {
    score += maxVal
    if (BigInt(nums[i]) > maxVal) maxVal = BigInt(nums[i])
  }
  return score
}
