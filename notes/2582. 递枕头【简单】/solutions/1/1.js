/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  // 一个完整的周期是 2(n-1) 秒（从 1 到 n 再回到 1）
  const fullCycle = 2 * (n - 1)
  // 计算在当前周期中的位置
  const position = time % fullCycle

  // 如果 position < n，说明在正向传递（从 1 到 n）
  if (position < n) {
    return position + 1
  }
  // 否则在反向传递（从 n 到 1）
  return 2 * n - position - 1
}
