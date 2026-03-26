/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const cnt = new Map()
  for (const x of nums) cnt.set(x, (cnt.get(x) || 0) + 1)
  let ans = 0
  for (const freq of cnt.values()) {
    if (freq === 1) return -1
    ans += Math.ceil(freq / 3)
  }
  return ans
}
