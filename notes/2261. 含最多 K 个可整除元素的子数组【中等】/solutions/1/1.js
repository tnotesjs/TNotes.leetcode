/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
  const n = nums.length
  const set = new Set()
  for (let i = 0; i < n; i++) {
    let divCount = 0
    let key = ''
    for (let j = i; j < n; j++) {
      if (nums[j] % p === 0) divCount++
      if (divCount > k) break
      key += (j > i ? ',' : '') + nums[j]
      set.add(key)
    }
  }
  return set.size
}
