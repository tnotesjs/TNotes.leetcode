/**
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function(mat) {
  const m = mat.length, n = mat[0].length
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
  const freq = new Map()
  const isPrime = (n) => {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false
    }
    return true
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const [dr, dc] of dirs) {
        let r = i + dr, c = j + dc, num = mat[i][j]
        while (r >= 0 && r < m && c >= 0 && c < n) {
          num = num * 10 + mat[r][c]
          if (isPrime(num)) {
            freq.set(num, (freq.get(num) || 0) + 1)
          }
          r += dr
          c += dc
        }
      }
    }
  }
  let ans = -1, maxF = 0
  for (const [num, f] of freq) {
    if (f > maxF || (f === maxF && num > ans)) {
      ans = num
      maxF = f
    }
  }
  return ans
}
