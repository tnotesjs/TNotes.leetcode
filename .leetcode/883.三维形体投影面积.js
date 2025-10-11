/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const n = grid.length
  let xy = 0 // 俯视图投影面积
  let yz = 0 // 正视图投影面积
  let zx = 0 // 侧视图投影面积

  for (let x = 0; x < n; x++) {
    let max_zx = 0 // 当前行最大值
    let max_yz = 0 // 当前列最大值

    for (let y = 0; y < n; y++) {
      // xy平面投影：只要有立方体就有投影
      if (grid[x][y] > 0) {
        xy++
      }

      // zx平面投影：从侧面看 - grid[固定][变化] 最大值之和
      max_zx = Math.max(max_zx, grid[x][y])

      // zx平面投影：从正面看 - grid[变化][固定] 最大值之和
      max_yz = Math.max(max_yz, grid[y][x])
    }

    zx += max_zx
    yz += max_yz
  }

  return xy + yz + zx
}
// @lc code=end
