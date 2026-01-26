/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  const t = time.split('')

  // 小时十位
  if (t[0] === '?') t[0] = t[1] === '?' || t[1] <= '3' ? '2' : '1'

  // 小时个位
  if (t[1] === '?') t[1] = t[0] === '2' ? '3' : '9'

  // 分钟十位
  if (t[3] === '?') t[3] = '5'

  // 分钟个位
  if (t[4] === '?') t[4] = '9'

  return t.join('')
}

// 提交于 2026.01.19 20:37
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 53.47MB 击败 100.00%
