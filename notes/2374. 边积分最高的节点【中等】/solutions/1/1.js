/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  const n = edges.length
  const score = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    score[edges[i]] += i
  }
  let maxScore = -1,
    ans = 0
  for (let i = 0; i < n; i++) {
    if (score[i] > maxScore) {
      maxScore = score[i]
      ans = i
    }
  }
  return ans
}
