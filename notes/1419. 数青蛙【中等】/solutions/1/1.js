/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  const cnt = new Array(5).fill(0) // c r o a k
  const idx = { c: 0, r: 1, o: 2, a: 3, k: 4 }
  let maxFrogs = 0
  for (const ch of croakOfFrogs) {
    const i = idx[ch]
    if (i === 0) {
      cnt[0]++
      maxFrogs = Math.max(maxFrogs, cnt[0] - cnt[4])
    } else {
      if (cnt[i - 1] <= cnt[i]) return -1
      cnt[i]++
    }
  }
  return cnt[0] === cnt[1] &&
    cnt[1] === cnt[2] &&
    cnt[2] === cnt[3] &&
    cnt[3] === cnt[4]
    ? maxFrogs
    : -1
}
