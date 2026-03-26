/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function (startAt, moveCost, pushCost, targetSeconds) {
  let res = Infinity
  // 枚举所有可能的 (mm, ss) 组合
  for (let mm = 0; mm <= 99; mm++) {
    const ss = targetSeconds - mm * 60
    if (ss < 0 || ss > 99) continue
    const digits = []
    const time = mm * 100 + ss
    if (time === 0) {
      digits.push(0)
    } else {
      let t = time
      while (t > 0) {
        digits.push(t % 10)
        t = Math.floor(t / 10)
      }
      digits.reverse()
    }
    // 计算代价
    let cost = 0
    let cur = startAt
    for (const d of digits) {
      if (cur !== d) {
        cost += moveCost
        cur = d
      }
      cost += pushCost
    }
    res = Math.min(res, cost)
  }
  return res
}
