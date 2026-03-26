/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  const map = new Map()
  map.set(0, 1)
  let xor = 0, count = 0
  for (const v of nums) {
    xor ^= v
    count += map.get(xor) || 0
    map.set(xor, (map.get(xor) || 0) + 1)
  }
  return count
}
