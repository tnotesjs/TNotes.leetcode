/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  const cnt = new Array(121).fill(0)
  for (const a of ages) cnt[a]++
  let res = 0
  for (let a = 1; a <= 120; a++)
    for (let b = 1; b <= 120; b++) {
      if (b <= 0.5 * a + 7) continue
      if (b > a) continue
      res += cnt[a] * (cnt[b] - (a === b ? 1 : 0))
    }
  return res
}
