/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const n = rains.length
  const res = new Array(n)
  const full = new Map() // 湖泊编号 -> 上次下雨的天
  const dryDays = [] // 晴天索引（有序）

  for (let i = 0; i < n; i++) {
    if (rains[i] === 0) {
      dryDays.push(i)
      res[i] = 1 // 默认抽干湖泊 1
    } else {
      res[i] = -1
      const lake = rains[i]
      if (full.has(lake)) {
        // 需要在 full.get(lake) 之后找一个晴天抽干
        const lastRain = full.get(lake)
        // 二分查找 dryDays 中第一个 > lastRain 的索引
        let lo = 0,
          hi = dryDays.length
        while (lo < hi) {
          const mid = (lo + hi) >> 1
          if (dryDays[mid] > lastRain) hi = mid
          else lo = mid + 1
        }
        if (lo === dryDays.length) return []
        res[dryDays[lo]] = lake
        dryDays.splice(lo, 1)
      }
      full.set(lake, i)
    }
  }
  return res
}
