/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const res = []
  for (let q = 0; q < l.length; q++) {
    const sub = nums.slice(l[q], r[q] + 1).sort((a, b) => a - b)
    let ok = true
    const diff = sub[1] - sub[0]
    for (let i = 2; i < sub.length; i++)
      if (sub[i] - sub[i - 1] !== diff) {
        ok = false
        break
      }
    res.push(ok)
  }
  return res
}
