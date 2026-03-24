/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map([[0, -1]])
  let count = 0,
    res = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1
    if (map.has(count)) res = Math.max(res, i - map.get(count))
    else map.set(count, i)
  }
  return res
}
