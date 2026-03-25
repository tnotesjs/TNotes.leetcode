/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const cnt = new Array(60).fill(0)
  let res = 0
  for (const t of time) {
    const r = t % 60
    const target = (60 - r) % 60
    res += cnt[target]
    cnt[r]++
  }
  return res
}
