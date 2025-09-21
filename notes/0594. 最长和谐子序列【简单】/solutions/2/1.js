/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b)

  let maxLength = 0
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    // 如果差值超过1，移动左指针
    while (nums[right] - nums[left] > 1) {
      left++
    }

    // 如果差值正好为1，更新最大长度
    if (nums[right] - nums[left] === 1) {
      maxLength = Math.max(maxLength, right - left + 1)
    }
  }

  return maxLength
}
