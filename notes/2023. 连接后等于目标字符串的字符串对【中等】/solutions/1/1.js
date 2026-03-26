/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  const map = new Map()
  for (const s of nums) map.set(s, (map.get(s) || 0) + 1)
  let count = 0
  for (let len = 1; len < target.length; len++) {
    const prefix = target.substring(0, len)
    const suffix = target.substring(len)
    if (prefix === suffix)
      count += (map.get(prefix) || 0) * ((map.get(suffix) || 0) - 1)
    else count += (map.get(prefix) || 0) * (map.get(suffix) || 0)
  }
  return count
}
