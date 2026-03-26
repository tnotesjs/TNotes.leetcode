/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function (nums) {
  const s = new Set(nums)
  let v = 1
  while (s.has(v)) v <<= 1
  return v
}
