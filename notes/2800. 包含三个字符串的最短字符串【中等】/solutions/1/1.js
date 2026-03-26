/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function (a, b, c) {
  const merge = (s, t) => {
    if (s.includes(t)) return s
    for (let i = Math.min(s.length, t.length); i >= 0; i--) {
      if (s.endsWith(t.slice(0, i))) return s + t.slice(i)
    }
    return s + t
  }
  const strs = [a, b, c]
  const perms = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
  ]
  let best = ''
  for (const p of perms) {
    const res = merge(merge(strs[p[0]], strs[p[1]]), strs[p[2]])
    if (
      !best ||
      res.length < best.length ||
      (res.length === best.length && res < best)
    ) {
      best = res
    }
  }
  return best
}
