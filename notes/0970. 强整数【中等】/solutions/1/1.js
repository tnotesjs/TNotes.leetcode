/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  const set = new Set()

  // 计算 x^i 的上界：x^i <= bound
  // 如果 x = 1，x^i = 1 对所有 i，只需要考虑 i = 0
  const xLimit = x === 1 ? 1 : Math.floor(Math.log(bound) / Math.log(x)) + 1
  const yLimit = y === 1 ? 1 : Math.floor(Math.log(bound) / Math.log(y)) + 1

  for (let i = 0; i < xLimit; i++) {
    const xi = Math.pow(x, i)
    if (xi > bound) break

    for (let j = 0; j < yLimit; j++) {
      const yj = Math.pow(y, j)
      const sum = xi + yj

      if (sum <= bound) {
        set.add(sum)
      } else {
        break // yj 已经太大，后续更大的 j 也不满足
      }

      // 如果 y = 1，y^j = 1 对所有 j，只需要一次
      if (y === 1) break
    }

    // 如果 x = 1，x^i = 1 对所有 i，只需要一次
    if (x === 1) break
  }

  return Array.from(set)
}
