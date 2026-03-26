/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const surplus = [], deficit = []
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] > 1) for (let k = 1; k < grid[i][j]; k++) surplus.push([i, j])
      else if (grid[i][j] === 0) deficit.push([i, j])
    }
  if (!deficit.length) return 0
  let ans = Infinity
  const permute = (arr, l) => {
    if (l === arr.length) {
      let cost = 0
      for (let i = 0; i < surplus.length; i++)
        cost += Math.abs(surplus[i][0] - arr[i][0]) + Math.abs(surplus[i][1] - arr[i][1])
      ans = Math.min(ans, cost)
      return
    }
    for (let i = l; i < arr.length; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]]
      permute(arr, l + 1)
      ;[arr[l], arr[i]] = [arr[i], arr[l]]
    }
  }
  permute(deficit, 0)
  return ans
}
