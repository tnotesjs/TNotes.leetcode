/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  const n = nums.length

  // 找最长递增前缀的结束位置
  let leftEnd = 0
  while (leftEnd + 1 < n && nums[leftEnd] < nums[leftEnd + 1]) leftEnd++

  // 如果整个数组都是递增的，所有子数组都可以移除
  if (leftEnd === n - 1) return (n * (n + 1)) / 2

  // 找最长递增后缀的开始位置
  let rightStart = n - 1
  while (rightStart > 0 && nums[rightStart - 1] < nums[rightStart]) rightStart--

  let result = 0

  result += leftEnd + 1 // 移除后缀，保留前面部分
  result += n - rightStart // 移除前缀，保留后面部分
  result += 1 // 全部移除

  // 移除中间部分，连接前缀和后缀
  // 对于前缀中的每个位置 i，找到后缀 [rightStart, n-1] 中第一个 nums[l] > nums[i] 的位置
  for (let i = 0; i <= leftEnd; i++) {
    let l = rightStart,
      r = n
    while (l < r) {
      let mid = Math.floor((l + r) / 2)
      if (nums[mid] > nums[i]) r = mid
      else l = mid + 1
    }
    // 从 l 到 n-1 的所有位置都可以与位置 i 连接
    result += n - l
  }

  return result
}
