/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const m = mat.length,
    n = mat[0].length
  const pos = new Map()
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) pos.set(mat[i][j], [i, j])

  const rowCnt = new Array(m).fill(0)
  const colCnt = new Array(n).fill(0)

  for (let k = 0; k < arr.length; k++) {
    const [r, c] = pos.get(arr[k])
    rowCnt[r]++
    colCnt[c]++
    if (rowCnt[r] === n || colCnt[c] === m) return k
  }
  return -1
}
