/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const pos = [],
    neg = []
  for (const x of nums) {
    if (x > 0) pos.push(x)
    else neg.push(x)
  }
  const res = new Array(nums.length)
  for (let i = 0; i < pos.length; i++) {
    res[i * 2] = pos[i]
    res[i * 2 + 1] = neg[i]
  }
  return res
}
