/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  // 计算最长顺序前缀 nums[0..i] 的和
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 非顺序前缀成员，直接跳出循环
    if (nums[i] !== nums[i - 1] + 1) break
    // 顺序前缀成员，求和
    sum += nums[i]
  }

  // 用 Set 存储数组中的所有数
  const numSet = new Set(nums)

  // 从 sum 开始找第一个不在数组中的数
  while (numSet.has(sum)) sum++

  return sum
}
