/**
 * @param {number[]} enemyEnergies
 * @param {number} currentEnergy
 * @return {number}
 */
var maximumPoints = function(enemyEnergies, currentEnergy) {
  enemyEnergies.sort((a, b) => a - b)
  const minE = enemyEnergies[0]
  if (currentEnergy < minE) return 0
  // 总能量 = currentEnergy + sum(rest) -> 尽量用最小能量得分
  let totalEnergy = currentEnergy
  for (let i = 1; i < enemyEnergies.length; i++) {
    totalEnergy += enemyEnergies[i]
  }
  return Math.floor(totalEnergy / minE)
}
