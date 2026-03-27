/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
  const n = energy.length
  let maxE = -Infinity
  // 从后往前，每个起点 i 的能量 = energy[i] + energy[i+k] + energy[i+2k] + ...
  // 后缀和思想，倒序遍历
  for (let i = n - 1; i >= n - k; i--) {
    let sum = 0
    for (let j = i; j >= 0; j -= k) {
      sum += energy[j]
      maxE = Math.max(maxE, sum)
    }
  }
  return maxE
}
