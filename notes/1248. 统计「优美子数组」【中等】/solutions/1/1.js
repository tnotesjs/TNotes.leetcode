/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const cnt = new Array(nums.length + 1).fill(0)
  cnt[0] = 1
  let oddCount = 0,
    ans = 0
  for (const num of nums) {
    if (num % 2 === 1) oddCount++
    if (oddCount >= k) ans += cnt[oddCount - k]
    cnt[oddCount]++
  }
  return ans
}
