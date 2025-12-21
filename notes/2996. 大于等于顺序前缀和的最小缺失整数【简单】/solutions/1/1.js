/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  // 计算最长顺序前缀的和
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      sum += nums[i]
    } else {
      break
    }
  }
  // 用 Set 存储数组中的所有数
  const numSet = new Set(nums)
  // 从 sum 开始找第一个不在数组中的数
  while (numSet.has(sum)) {
    sum++
  }
  return sum
}
