/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  const cnt = Array(1001).fill(0)
  for (const arr of nums) {
    for (const v of arr) cnt[v] += 1
  }

  const res = []
  const need = nums.length
  for (let v = 1; v <= 1000; v += 1) {
    if (cnt[v] === need) res.push(v)
  }
  return res
}
