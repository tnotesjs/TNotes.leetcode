/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const target = nums.length - k
  function quickSelect(lo, hi) {
    const pivot = nums[hi]
    let i = lo
    for (let j = lo; j < hi; j++) {
      if (nums[j] <= pivot) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        i++
      }
    }
    ;[nums[i], nums[hi]] = [nums[hi], nums[i]]
    if (i === target) return nums[i]
    if (i < target) return quickSelect(i + 1, hi)
    return quickSelect(lo, i - 1)
  }
  return quickSelect(0, nums.length - 1)
}
