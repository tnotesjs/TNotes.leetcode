/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function (nums, space) {
  const map = new Map()
  for (const x of nums) {
    const r = x % space
    map.set(r, (map.get(r) || 0) + 1)
  }
  let maxCount = 0, ans = Infinity
  for (const x of nums) {
    const cnt = map.get(x % space)
    if (cnt > maxCount || (cnt === maxCount && x < ans)) {
      maxCount = cnt
      ans = x
    }
  }
  return ans
}
