/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
  const m = grid.length, n = grid[0].length
  let flips = 0
  // 四个对称位置必须相同
  for (let i = 0; i < Math.floor(m / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const sum = grid[i][j] + grid[i][n-1-j] + grid[m-1-i][j] + grid[m-1-i][n-1-j]
      flips += Math.min(sum, 4 - sum)
    }
  }
  // 处理中间行/列
  let diff = 0, ones = 0
  if (m % 2 === 1) {
    const mid = Math.floor(m / 2)
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (grid[mid][j] !== grid[mid][n-1-j]) diff++
      else ones += grid[mid][j] * 2
    }
  }
  if (n % 2 === 1) {
    const mid = Math.floor(n / 2)
    for (let i = 0; i < Math.floor(m / 2); i++) {
      if (grid[i][mid] !== grid[m-1-i][mid]) diff++
      else ones += grid[i][mid] * 2
    }
  }
  // 中心点
  if (m % 2 === 1 && n % 2 === 1) {
    // 中心点自身是回文，如果它是 1 则贡献 1
    // 1 的总数需要是 4 的倍数
  }
  // diff 对：翻转使其相同，可以选全 0 或全 1
  // ones 对：已经相同且都是 1
  // 总共 1 的个数 = 4 * (四角的贡献) + 2 * (对称对选 1 的) + center
  // 需要总 1 是 4 的倍数
  // 四角的已经确定后总是 4 的倍数
  // 对称对贡献 2，需要总共是 4 的倍数
  // ones 当前贡献 ones 个 1，diff 个不确定
  if (diff > 0) {
    flips += diff
    // diff 个不确定对，翻转时可选全 0 或全 1 使得 ones + 选 1 的 * 2 是 4 的倍数
  } else {
    // ones 必须是 4 的倍数
    if (ones % 4 !== 0) flips += 2
  }
  return flips
}
