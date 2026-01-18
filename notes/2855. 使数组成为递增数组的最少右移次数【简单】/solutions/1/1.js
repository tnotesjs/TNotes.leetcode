/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  const n = nums.length
  let breakPoint = -1

  // 查找断点位置（nums[i] > nums[i+1]）
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (breakPoint !== -1) {
        // 如果有多个断点，无法通过右移使数组递增
        return -1
      }
      breakPoint = i
    }
  }

  // 没有断点，数组已经递增
  if (breakPoint === -1) return 0

  // 检查右移后能否形成递增数组
  // 需要满足：nums[n-1] <= nums[0]
  if (nums[n - 1] > nums[0]) return -1

  // 右移次数 = n - (breakPoint + 1)
  return n - breakPoint - 1
}
