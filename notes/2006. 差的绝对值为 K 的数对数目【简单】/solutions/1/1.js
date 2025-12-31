/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const cnt = new Array(101).fill(0)
  let ans = 0

  for (const x of nums) {
    const low = x - k
    const high = x + k
    if (low >= 1) ans += cnt[low]
    if (high <= 100) ans += cnt[high]
    cnt[x] += 1
  }

  return ans
}
