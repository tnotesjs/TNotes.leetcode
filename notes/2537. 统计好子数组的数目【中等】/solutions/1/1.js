/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const cnt = new Map()
  let pairs = 0, ans = 0, left = 0
  for (let right = 0; right < nums.length; right++) {
    const c = cnt.get(nums[right]) || 0
    pairs += c
    cnt.set(nums[right], c + 1)
    while (pairs >= k) {
      ans += nums.length - right
      const lc = cnt.get(nums[left])
      cnt.set(nums[left], lc - 1)
      pairs -= lc - 1
      left++
    }
  }
  return ans
}
