/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  // 使用最大堆(通过取负值实现)
  const heap = gifts.map((x) => -x)
  heap.sort((a, b) => a - b)

  for (let i = 0; i < k; i++) {
    // 取出最大值
    const max = -heap.shift()
    // 计算平方根向下取整后的值
    const newVal = Math.floor(Math.sqrt(max))
    // 将新值插入堆中
    heap.push(-newVal)
    heap.sort((a, b) => a - b)
  }

  // 计算剩余礼物总数
  return heap.reduce((sum, x) => sum - x, 0)
}
