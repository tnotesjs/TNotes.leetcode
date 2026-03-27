/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
  happiness.sort((a, b) => b - a)
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += Math.max(0, happiness[i] - i)
  }
  return sum
}
