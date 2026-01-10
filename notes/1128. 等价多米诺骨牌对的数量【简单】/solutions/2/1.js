/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const map = new Map()
  for (let [a, b] of dominoes) {
    if (a > b) [a, b] = [b, a]
    const key = a * 10 + b // 1..9，安全编码到两位数
    map.set(key, (map.get(key) || 0) + 1)
  }
  let ans = 0
  for (let c of map.values()) {
    ans += (c * (c - 1)) / 2
  }
  return ans
}
