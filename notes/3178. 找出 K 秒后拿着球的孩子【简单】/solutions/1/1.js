/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
  // 一个完整周期的长度：从 0 到 n-1 再回到 0 需要 2*(n-1) 步
  const cycle = 2 * (n - 1)
  // 取模得到在当前周期内的位置
  k = k % cycle
  // 如果 k < n-1，说明还在向右传递的过程中
  // 否则说明在向左传递的过程中
  return k < n - 1 ? k : cycle - k
}
