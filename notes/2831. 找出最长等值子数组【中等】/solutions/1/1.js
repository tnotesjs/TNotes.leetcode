/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
  const groups = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!groups.has(nums[i])) groups.set(nums[i], [])
    groups.get(nums[i]).push(i)
  }
  let ans = 0
  for (const indices of groups.values()) {
    let l = 0
    for (let r = 0; r < indices.length; r++) {
      while (indices[r] - indices[l] + 1 - (r - l + 1) > k) l++
      ans = Math.max(ans, r - l + 1)
    }
  }
  return ans
}
