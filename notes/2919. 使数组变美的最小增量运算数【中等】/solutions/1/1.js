/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minIncrementOperations = function(nums, k) {
  const n = nums.length
  let f0 = Math.max(0, k - nums[0])
  let f1 = Math.max(0, k - nums[1])
  let f2 = Math.max(0, k - nums[2])
  for (let i = 3; i < n; i++) {
    const cost = Math.max(0, k - nums[i])
    const fi = cost + Math.min(f0, f1, f2)
    f0 = f1
    f1 = f2
    f2 = fi
  }
  return Math.min(f0, f1, f2)
}
