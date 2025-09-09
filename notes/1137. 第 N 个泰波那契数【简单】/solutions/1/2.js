/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  // 处理基础情况
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  // 使用滚动数组优化空间复杂度
  let t_0 = 0 // T(0) -> Tn
  let t_1 = 1 // T(1) -> Tn+1
  let t_2 = 1 // T(2) -> Tn+2

  // 滚动计算 - 从第 3 项开始计算到第 n 项
  for (let i = 3; i <= n; i++) {
    const next = t_0 + t_1 + t_2
    t_0 = t_1
    t_1 = t_2
    t_2 = next
  }

  return t_2
}
