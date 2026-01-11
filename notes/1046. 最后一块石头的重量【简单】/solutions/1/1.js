/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // 使用最大堆来模拟过程
  while (stones.length > 1) {
    // 排序以获取最大的两个石头
    stones.sort((a, b) => b - a)

    const first = stones[0]
    const second = stones[1]

    // 移除前两个元素
    stones = stones.slice(2)

    // 如果两个石头重量不同，将差值放回数组
    if (first !== second) {
      stones.push(first - second)
    }
  }

  // 返回剩余的石头重量，如果没有石头则返回0
  return stones.length === 0 ? 0 : stones[0]
}
