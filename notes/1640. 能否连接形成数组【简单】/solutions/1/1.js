/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const map = new Map()
  for (const p of pieces) {
    map.set(p[0], p)
  }

  let i = 0
  while (i < arr.length) {
    const start = arr[i]
    if (!map.has(start)) return false
    const segment = map.get(start)
    for (let j = 0; j < segment.length; j++) {
      if (arr[i + j] !== segment[j]) return false
    }
    i += segment.length
  }

  return true
}

// 提交于 2026.01.19 20:31
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 52.41MB 击败 100.00%
