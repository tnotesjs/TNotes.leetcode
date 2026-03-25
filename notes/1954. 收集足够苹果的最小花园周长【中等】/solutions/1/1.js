/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function (neededApples) {
  // 边长为 2n 的正方形，苹果数 = 2n(n+1)(2n+1)
  let lo = 1,
    hi = 100000
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (2 * mid * (mid + 1) * (2 * mid + 1) >= neededApples) hi = mid
    else lo = mid + 1
  }
  return 8 * lo
}
