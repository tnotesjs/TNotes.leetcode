/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const set = new Set()
  let l = 0,
    sum = 0,
    res = 0
  for (const x of nums) {
    while (set.has(x)) {
      set.delete(nums[l])
      sum -= nums[l++]
    }
    set.add(x)
    sum += x
    res = Math.max(res, sum)
  }
  return res
}
