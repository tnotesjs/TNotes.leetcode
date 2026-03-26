/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function (nums) {
  const n = nums.length
  const totalOnes = nums.reduce((s, v) => s + v, 0)
  let zeros = 0,
    ones = totalOnes
  let maxScore = totalOnes // i=0: 0 zeros + totalOnes ones
  const res = [0]
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) zeros++
    else ones--
    const score = zeros + ones
    if (score > maxScore) {
      maxScore = score
      res.length = 0
      res.push(i + 1)
    } else if (score === maxScore) {
      res.push(i + 1)
    }
  }
  return res
}
