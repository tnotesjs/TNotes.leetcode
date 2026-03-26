/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
  const colors = new Array(n).fill(0)
  const ans = []
  let count = 0
  for (const [idx, color] of queries) {
    const old = colors[idx]
    if (old !== 0) {
      if (idx > 0 && colors[idx - 1] === old) count--
      if (idx < n - 1 && colors[idx + 1] === old) count--
    }
    colors[idx] = color
    if (idx > 0 && colors[idx - 1] === color) count++
    if (idx < n - 1 && colors[idx + 1] === color) count++
    ans.push(count)
  }
  return ans
}
