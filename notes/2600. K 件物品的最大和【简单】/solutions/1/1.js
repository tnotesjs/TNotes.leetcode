/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  // 优先选择标记为 1 的物品
  if (k <= numOnes) {
    return k
  }

  // 然后选择标记为 0 的物品
  if (k <= numOnes + numZeros) {
    return numOnes
  }

  // 最后选择标记为 -1 的物品
  const negOnesCount = k - numOnes - numZeros
  return numOnes - negOnesCount
}
