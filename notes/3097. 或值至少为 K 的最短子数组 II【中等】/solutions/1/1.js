/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  const n = nums.length
  let res = Infinity
  const bits = new Array(32).fill(0) // 每一位上有多少个 1
  let left = 0
  for (let right = 0; right < n; right++) {
    for (let b = 0; b < 32; b++) {
      if (nums[right] & (1 << b)) bits[b]++
    }
    while (left <= right && getOr(bits) >= k) {
      res = Math.min(res, right - left + 1)
      for (let b = 0; b < 32; b++) {
        if (nums[left] & (1 << b)) bits[b]--
      }
      left++
    }
  }
  return res === Infinity ? -1 : res
}

function getOr(bits) {
  let val = 0
  for (let b = 0; b < 32; b++) {
    if (bits[b] > 0) val |= (1 << b)
  }
  return val
}
