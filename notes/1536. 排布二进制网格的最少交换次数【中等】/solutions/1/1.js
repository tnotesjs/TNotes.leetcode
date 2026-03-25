/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  const n = grid.length
  // 计算每行尾部连续 0 的个数
  const trailing = new Array(n)
  for (let i = 0; i < n; i++) {
    let cnt = 0
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 0) cnt++
      else break
    }
    trailing[i] = cnt
  }
  let swaps = 0
  for (let i = 0; i < n; i++) {
    const need = n - 1 - i // 第 i 行需要至少 n-1-i 个尾部 0
    if (trailing[i] >= need) continue
    let j = i + 1
    while (j < n && trailing[j] < need) j++
    if (j === n) return -1
    while (j > i) {
      ;[trailing[j], trailing[j - 1]] = [trailing[j - 1], trailing[j]]
      j--
      swaps++
    }
  }
  return swaps
}
