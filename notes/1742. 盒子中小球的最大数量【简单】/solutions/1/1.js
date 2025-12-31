/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const box = new Map()
  let best = 0

  // 将每个编号按数位和分配到对应盒子
  for (let x = lowLimit; x <= highLimit; x += 1) {
    let sum = 0
    let v = x
    while (v > 0) {
      sum += v % 10
      v = Math.floor(v / 10)
    }
    const cur = (box.get(sum) || 0) + 1
    box.set(sum, cur)
    if (cur > best) best = cur
  }

  return best
}
