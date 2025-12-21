/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  // 计算苹果总数
  let total = 0
  for (const a of apple) {
    total += a
  }
  // 将箱子容量从大到小排序，贪心地选择大箱子
  capacity.sort((a, b) => b - a)
  let count = 0
  for (const c of capacity) {
    total -= c
    count++
    if (total <= 0) {
      break
    }
  }
  return count
}
