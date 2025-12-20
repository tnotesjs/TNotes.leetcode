/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // 使用最大堆（简化：每轮排序，因 n<=30）
  while (stones.length > 1) {
    stones.sort((a, b) => b - a)
    const y = stones.shift()
    const x = stones.shift()
    if (y !== x) stones.push(y - x)
  }
  return stones.length ? stones[0] : 0
}
