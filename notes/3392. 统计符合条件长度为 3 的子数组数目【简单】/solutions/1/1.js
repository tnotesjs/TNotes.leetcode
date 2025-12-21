/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  const n = nums.length
  let count = 0

  // 遍历所有长度为 3 的子数组
  for (let i = 0; i < n - 2; i++) {
    // 检查第一个数 + 第三个数 == 第二个数 / 2
    // 等价于 (nums[i] + nums[i+2]) * 2 == nums[i+1]
    if ((nums[i] + nums[i + 2]) * 2 === nums[i + 1]) {
      count++
    }
  }

  return count
}
