/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 判断是否在对角线上（主对角线或副对角线）
      const onDiagonal = i === j || i + j === n - 1

      if (onDiagonal) {
        // 对角线上的元素不能为 0
        if (grid[i][j] === 0) return false
      } else {
        // 非对角线上的元素必须为 0
        if (grid[i][j] !== 0) return false
      }
    }
  }

  return true
}
