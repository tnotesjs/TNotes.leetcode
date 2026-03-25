/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const m = box.length,
    n = box[0].length
  // 先让石头下落（向右）
  for (let i = 0; i < m; i++) {
    let empty = n - 1
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === '*') {
        empty = j - 1
      } else if (box[i][j] === '#') {
        box[i][j] = '.'
        box[i][empty] = '#'
        empty--
      }
    }
  }
  // 顺时针旋转 90 度
  const res = Array.from({ length: n }, () => new Array(m))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][m - 1 - i] = box[i][j]
    }
  }
  return res
}
