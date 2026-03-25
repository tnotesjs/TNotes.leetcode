/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const MOD = 1e9 + 7
  const rev = (n) => {
    let r = 0
    while (n > 0) {
      r = r * 10 + (n % 10)
      n = Math.floor(n / 10)
    }
    return r
  }
  const map = new Map()
  let ans = 0
  for (const x of nums) {
    const key = x - rev(x)
    const cnt = map.get(key) || 0
    ans = (ans + cnt) % MOD
    map.set(key, cnt + 1)
  }
  return ans
}
