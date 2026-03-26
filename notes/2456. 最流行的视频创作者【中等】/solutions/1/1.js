/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  const map = new Map()
  for (let i = 0; i < creators.length; i++) {
    const c = creators[i]
    if (!map.has(c)) {
      map.set(c, { total: 0, bestIdx: i })
    }
    const info = map.get(c)
    info.total += views[i]
    const bi = info.bestIdx
    if (views[i] > views[bi] || (views[i] === views[bi] && ids[i] < ids[bi])) {
      info.bestIdx = i
    }
  }
  let maxTotal = -Infinity
  for (const [, info] of map) {
    maxTotal = Math.max(maxTotal, info.total)
  }
  const res = []
  for (const [c, info] of map) {
    if (info.total === maxTotal) {
      res.push([c, ids[info.bestIdx]])
    }
  }
  return res
}
