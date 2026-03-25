/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  const check = (k) => {
    const removed = new Set(removable.slice(0, k))
    let j = 0
    for (let i = 0; i < s.length && j < p.length; i++) {
      if (!removed.has(i) && s[i] === p[j]) j++
    }
    return j === p.length
  }
  let lo = 0,
    hi = removable.length
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2)
    if (check(mid)) lo = mid
    else hi = mid - 1
  }
  return lo
}
