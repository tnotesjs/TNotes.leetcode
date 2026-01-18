/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const map = new Map()

  // 按员工分组并转换时间为分钟数
  for (let i = 0; i < keyName.length; i++) {
    const name = keyName[i]
    const [h, m] = keyTime[i].split(':').map(Number)
    const minutes = h * 60 + m

    if (!map.has(name)) {
      map.set(name, [])
    }
    map.get(name).push(minutes)
  }

  const result = []

  // 检查每个员工的刷卡记录
  for (const [name, times] of map) {
    // 排序时间
    times.sort((a, b) => a - b)

    // 检查是否存在一小时内刷卡3次及以上
    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] <= 60) {
        result.push(name)
        break
      }
    }
  }

  // 字典序排序
  return result.sort()
}
