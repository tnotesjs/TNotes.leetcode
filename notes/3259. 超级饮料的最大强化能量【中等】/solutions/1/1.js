/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function(energyDrinkA, energyDrinkB) {
  const n = energyDrinkA.length
  // dpA[i] = 第 i 小时喝 A 的最大总能量
  // dpB[i] = 第 i 小时喝 B 的最大总能量
  // 切换需跳过一小时：dpA[i] = max(dpA[i-1], dpB[i-2]) + A[i]
  let dpA = energyDrinkA[0], dpB = energyDrinkB[0]
  let prevA = 0, prevB = 0
  for (let i = 1; i < n; i++) {
    const newA = Math.max(dpA, prevB) + energyDrinkA[i]
    const newB = Math.max(dpB, prevA) + energyDrinkB[i]
    prevA = dpA
    prevB = dpB
    dpA = newA
    dpB = newB
  }
  return Math.max(dpA, dpB)
}
