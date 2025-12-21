/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  // 检查以 (r, c) 为左上角的 2x2 正方形
  const check = (r, c) => {
    let countB = 0
    for (let i = r; i < r + 2; i++) {
      for (let j = c; j < c + 2; j++) {
        if (grid[i][j] === 'B') countB++
      }
    }
    // 4个格子中至少有3个同色，改变至多1个即可
    return countB >= 3 || countB <= 1
  }

  // 3x3 矩阵中有 4 个 2x2 的正方形
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (check(i, j)) return true
    }
  }

  return false
}
