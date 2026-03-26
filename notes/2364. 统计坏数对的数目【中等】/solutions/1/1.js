/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const n = nums.length
  const total = (n * (n - 1)) / 2
  const map = new Map()
  let good = 0
  for (let i = 0; i < n; i++) {
    const diff = nums[i] - i
    const cnt = map.get(diff) || 0
    good += cnt
    map.set(diff, cnt + 1)
  }
  return total - good
}
