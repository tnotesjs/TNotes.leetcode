/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function(image, threshold) {
  const m = image.length, n = image[0].length
  const sumGrid = Array.from({length: m}, () => new Array(n).fill(0))
  const cntGrid = Array.from({length: m}, () => new Array(n).fill(0))

  for (let i = 0; i <= m - 3; i++) {
    for (let j = 0; j <= n - 3; j++) {
      // 检查 3x3 区域是否满足条件
      let valid = true
      let total = 0
      outer:
      for (let r = i; r < i + 3; r++) {
        for (let c = j; c < j + 3; c++) {
          total += image[r][c]
          if (r > i && Math.abs(image[r][c] - image[r - 1][c]) > threshold) { valid = false; break outer }
          if (c > j && Math.abs(image[r][c] - image[r][c - 1]) > threshold) { valid = false; break outer }
        }
      }
      if (valid) {
        const avg = Math.floor(total / 9)
        for (let r = i; r < i + 3; r++) {
          for (let c = j; c < j + 3; c++) {
            sumGrid[r][c] += avg
            cntGrid[r][c]++
          }
        }
      }
    }
  }

  const result = Array.from({length: m}, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (cntGrid[i][j] > 0) {
        result[i][j] = Math.floor(sumGrid[i][j] / cntGrid[i][j])
      } else {
        result[i][j] = image[i][j]
      }
    }
  }
  return result
}
