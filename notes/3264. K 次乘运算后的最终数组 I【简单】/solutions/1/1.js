/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    // 找到最小值的下标（最前面的）
    let minIdx = 0
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j
      }
    }
    // 乘以 multiplier
    nums[minIdx] *= multiplier
  }

  return nums
}
