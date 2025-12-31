/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  const sorted = [...nums].sort((a, b) => b - a)
  let sumChosen = 0
  const total = sorted.reduce((acc, v) => acc + v, 0)
  const res = []
  for (const v of sorted) {
    res.push(v)
    sumChosen += v
    if (sumChosen > total - sumChosen) break
  }
  return res
}
