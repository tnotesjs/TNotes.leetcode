/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length
  const count = new Map()
  // 统计每个数字出现的次数
  for (const row of grid) {
    for (const num of row) {
      count.set(num, (count.get(num) || 0) + 1)
    }
  }
  let repeated = 0
  let missing = 0
  // 找出重复的和缺失的数字
  for (let i = 1; i <= n * n; i++) {
    const c = count.get(i) || 0
    if (c === 2) {
      repeated = i
    } else if (c === 0) {
      missing = i
    }
  }
  return [repeated, missing]
}
