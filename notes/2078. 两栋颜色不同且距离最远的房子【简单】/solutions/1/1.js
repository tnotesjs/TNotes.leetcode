/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const n = colors.length
  let ans = 0

  for (let j = n - 1; j >= 0; j -= 1) {
    if (colors[j] !== colors[0]) {
      ans = Math.max(ans, j)
      break
    }
  }

  for (let i = 0; i < n; i += 1) {
    if (colors[i] !== colors[n - 1]) {
      ans = Math.max(ans, n - 1 - i)
      break
    }
  }

  return ans
}
