/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  const n = customers.length
  // penalty = 关门前的 N 数量 + 关门后的 Y 数量
  let totalY = 0
  for (const c of customers) if (c === 'Y') totalY++

  let penalty = totalY // 关门时间 = 0，所有 Y 都在关门后
  let minPenalty = penalty, bestTime = 0
  for (let i = 0; i < n; i++) {
    if (customers[i] === 'Y') penalty--
    else penalty++
    if (penalty < minPenalty) {
      minPenalty = penalty
      bestTime = i + 1
    }
  }
  return bestTime
}
