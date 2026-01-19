/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let ans = 0

  for (let a = 1; a <= n; a += 1) {
    for (let b = 1; b <= n; b += 1) {
      const c2 = a * a + b * b
      const c = Math.trunc(Math.sqrt(c2))
      // 检查 c 是否为整数且在范围内
      if (c * c === c2 && c <= n) {
        ans += 1
      }
    }
  }

  return ans
}
