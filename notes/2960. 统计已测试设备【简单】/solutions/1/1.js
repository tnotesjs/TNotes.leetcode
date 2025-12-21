/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let tested = 0 // 已测试设备数，同时也是累计减少的电量
  for (const battery of batteryPercentages) {
    // 实际电量 = 原电量 - 已测试设备数
    if (battery - tested > 0) {
      tested++
    }
  }
  return tested
}
