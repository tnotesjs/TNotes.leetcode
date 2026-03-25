/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0,
    zeros = 0,
    res = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++
    while (zeros > 1) {
      if (nums[left] === 0) zeros--
      left++
    }
    // 窗口内最多 1 个 0，删除那个 0 后长度为 right - left
    res = Math.max(res, right - left)
  }
  return res
}
