/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const n = s.length
  let count = 0
  // 枚举 0 的个数 z，1 的个数 >= z^2
  // 对每个起点 i，枚举 0 的位置
  const zeros = []
  for (let i = 0; i < n; i++) if (s[i] === '0') zeros.push(i)

  for (let i = 0; i < n; i++) {
    if (s[i] === '0') continue
    // 从位置 i 开始，0 个 zero 的情况不需要特殊处理
  }
  // 枚举子串中 0 的个数 z
  // z = 0: 全 1 的子串数
  // 找所有全 1 的段
  let res = 0
  let j = 0
  // 全 1 子串
  let oneLen = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') oneLen++
    else {
      res += oneLen * (oneLen + 1) / 2
      oneLen = 0
    }
  }
  res += oneLen * (oneLen + 1) / 2

  // z >= 1: 枚举 0 的个数
  for (let z = 1; z * z <= n; z++) {
    // 枚举连续 z 个 0 的窗口
    for (let k = 0; k + z - 1 < zeros.length; k++) {
      const left0 = zeros[k], right0 = zeros[k + z - 1]
      const totalLen = right0 - left0 + 1
      const ones = totalLen - z
      // 需要 ones + 额外 1 >= z*z => 额外 1 >= z*z - ones
      const need = Math.max(0, z * z - ones)
      // 左边可扩展到 (k>0 ? zeros[k-1]+1 : 0) 到 left0
      const leftBound = k > 0 ? zeros[k - 1] + 1 : 0
      const leftOnes = left0 - leftBound
      // 右边可扩展到 right0 到 (k+z < zeros.length ? zeros[k+z]-1 : n-1)
      const rightBound = k + z < zeros.length ? zeros[k + z] - 1 : n - 1
      const rightOnes = rightBound - right0
      if (leftOnes + rightOnes < need) continue
      // 枚举左边取 lx 个 1, 右边取 need - lx 到 rightOnes 个 1
      const minLeft = Math.max(0, need - rightOnes)
      const maxLeft = Math.min(leftOnes, need)
      if (need === 0) {
        // 左边 [0, leftOnes], 右边 [0, rightOnes]
        res += (leftOnes + 1) * (rightOnes + 1)
      } else {
        // 左取 >= minLeft, 然后右取 >= need - 左取
        // 等价于: 对左取 lx in [minLeft, maxLeft], 右边有 rightOnes - (need - lx) + 1 种选择
        // 对左取 lx in [maxLeft+1, leftOnes], 右边有 rightOnes + 1 种选择
        for (let lx = minLeft; lx <= maxLeft; lx++) {
          res += rightOnes - (need - lx) + 1
        }
        res += (leftOnes - maxLeft) * (rightOnes + 1)
      }
    }
  }
  return res
}
