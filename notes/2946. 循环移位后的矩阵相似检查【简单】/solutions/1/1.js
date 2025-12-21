/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const m = mat.length
  const n = mat[0].length
  // 循环移位 k 次等价于移位 k % n 次
  k = k % n
  if (k === 0) return true

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 检查移位后的位置是否与原位置相同
      // 偶数行左移，奇数行右移
      const newJ =
        i % 2 === 0
          ? (j + k) % n // 偶数行左移：原位置 j 的元素移到 (j - k + n) % n，等价于 (j + k) % n 位置的元素移到 j
          : (j - k + n) % n // 奇数行右移
      if (mat[i][j] !== mat[i][newJ]) {
        return false
      }
    }
  }
  return true
}
