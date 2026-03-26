/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  const n = nums.length
  const rightMin = new Array(n)
  rightMin[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i])
  }

  let res = -1
  let leftMin = nums[0]
  for (let j = 1; j < n - 1; j++) {
    if (leftMin < nums[j] && rightMin[j + 1] < nums[j]) {
      const sum = leftMin + nums[j] + rightMin[j + 1]
      if (res === -1 || sum < res) res = sum
    }
    leftMin = Math.min(leftMin, nums[j])
  }
  return res
}
