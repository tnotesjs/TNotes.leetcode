/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const groups = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      const d = i + j
      if (!groups[d]) groups[d] = []
      groups[d].push(nums[i][j])
    }
  }
  const res = []
  for (const g of groups) {
    if (!g) continue
    // 同一对角线从下到上，即反序
    for (let i = g.length - 1; i >= 0; i--) res.push(g[i])
  }
  return res
}
