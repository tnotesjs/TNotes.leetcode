/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  // 索引到 51，处理 r+1
  const diff = new Array(52).fill(0)

  for (const [l, r] of ranges) {
    // 区间开始位置+1
    diff[l] += 1
    // 区间结束的下一个位置-1
    diff[r + 1] -= 1
  }

  let cover = 0
  for (let i = 1; i <= 50; i += 1) {
    // 计算前缀和，得到当前位置被覆盖次数
    cover += diff[i]
    // 检查目标范围内是否未被覆盖
    if (i >= left && i <= right && cover === 0) return false
  }
  return true
}
