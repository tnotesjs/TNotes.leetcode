/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const arr = []
  for (const row of grid) for (const v of row) arr.push(v)
  const mod = arr[0] % x
  for (const v of arr) if (v % x !== mod) return -1
  arr.sort((a, b) => a - b)
  const median = arr[Math.floor(arr.length / 2)]
  let ops = 0
  for (const v of arr) ops += Math.abs(v - median) / x
  return ops
}
