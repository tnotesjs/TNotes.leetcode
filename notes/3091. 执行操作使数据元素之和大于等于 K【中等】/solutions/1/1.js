/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function(k) {
  if (k <= 1) return 0
  let minOps = Infinity
  // 枚举增加操作次数 i，则元素值为 1+i，复制次数为 ceil(k/(1+i))-1
  for (let i = 0; i < k; i++) {
    const val = 1 + i
    const copies = Math.ceil(k / val) - 1
    minOps = Math.min(minOps, i + copies)
  }
  return minOps
}
