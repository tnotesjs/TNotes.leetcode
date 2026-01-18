/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // 统计第一个窗口中的白色块数量
  let whiteCount = 0
  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') {
      whiteCount++
    }
  }

  let minRecolors = whiteCount

  // 滑动窗口
  for (let i = k; i < blocks.length; i++) {
    // 新进入窗口的块
    if (blocks[i] === 'W') {
      whiteCount++
    }
    // 离开窗口的块
    if (blocks[i - k] === 'W') {
      whiteCount--
    }
    minRecolors = Math.min(minRecolors, whiteCount)
  }

  return minRecolors
}
