/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let distance = 0

  while (mainTank >= 5) {
    // 消耗 5 升燃料，行驶 50 km
    distance += 50
    mainTank -= 5

    // 如果副油箱还有油，转移 1 升到主油箱
    if (additionalTank > 0) {
      mainTank++
      additionalTank--
    }
  }

  // 消耗剩余的燃料
  distance += mainTank * 10

  return distance
}
