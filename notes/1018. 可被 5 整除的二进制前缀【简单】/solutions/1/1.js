/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  const res = []
  let mod = 0
  for (const b of nums) {
    mod = (mod * 2 + b) % 5
    res.push(mod === 0)
  }
  return res
}
