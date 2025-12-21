/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  const n = grid.length
  // 冠军是比所有其他队伍都强的队伍
  // 即该行的和为 n-1（除了对角线外全是 1）
  for (let i = 0; i < n; i++) {
    let wins = 0
    for (let j = 0; j < n; j++) {
      wins += grid[i][j]
    }
    if (wins === n - 1) {
      return i
    }
  }
  return -1
}
