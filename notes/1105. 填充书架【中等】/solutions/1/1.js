/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    let width = 0,
      height = 0
    for (let j = i; j >= 1; j--) {
      width += books[j - 1][0]
      if (width > shelfWidth) break
      height = Math.max(height, books[j - 1][1])
      dp[i] = Math.min(dp[i], dp[j - 1] + height)
    }
  }
  return dp[n]
}
