/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  const cnt = new Map()
  cnt.set(0, 1)
  let prefix = 0, ans = 0
  for (const x of nums) {
    if (x % modulo === k) prefix++
    const mod = prefix % modulo
    const need = ((mod - k) % modulo + modulo) % modulo
    ans += cnt.get(need) || 0
    cnt.set(mod, (cnt.get(mod) || 0) + 1)
  }
  return ans
}
