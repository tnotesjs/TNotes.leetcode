/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  let total = 0
  for (const x of nums) total = (total + (x % p)) % p
  if (total === 0) return 0
  const map = new Map([[0, -1]])
  let prefix = 0,
    res = nums.length
  for (let i = 0; i < nums.length; i++) {
    prefix = (prefix + (nums[i] % p)) % p
    const need = (prefix - total + p) % p
    if (map.has(need)) res = Math.min(res, i - map.get(need))
    map.set(prefix, i)
  }
  return res >= nums.length ? -1 : res
}
