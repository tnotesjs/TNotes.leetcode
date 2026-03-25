/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length
  // 取前 k 张作为初始和
  let sum = 0
  for (let i = 0; i < k; i++) sum += cardPoints[i]
  let maxSum = sum
  // 逐步将前面的牌换成后面的牌
  for (let i = 0; i < k; i++) {
    sum -= cardPoints[k - 1 - i]
    sum += cardPoints[n - 1 - i]
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}
