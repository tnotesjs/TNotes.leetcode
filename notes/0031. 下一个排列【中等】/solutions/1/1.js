/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length
  let i = n - 2

  // 步骤 1：从右向左找到第一个下降位 nums[i] < nums[i+1]
  while (i >= 0 && nums[i] >= nums[i + 1]) i--

  if (i >= 0) {
    // 步骤 2：在 i 右侧找到最小的比 nums[i] 大的数 nums[j]
    let j = n - 1
    while (nums[j] <= nums[i])
      j--
      // 步骤 3：交换
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  // 步骤 4：将 i+1 右侧区域最小化
  let left = i + 1
  let right = n - 1
  while (left < right) {
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
}
