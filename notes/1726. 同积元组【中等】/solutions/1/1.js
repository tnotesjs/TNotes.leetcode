/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const map = new Map()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const p = nums[i] * nums[j]
      map.set(p, (map.get(p) || 0) + 1)
    }
  }
  let res = 0
  for (const cnt of map.values()) {
    res += ((cnt * (cnt - 1)) / 2) * 8
  }
  return res
}
