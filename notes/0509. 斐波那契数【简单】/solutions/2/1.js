/**
 * 计算斐波那契数 F(n)
 * 斐波那契数列定义：F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) (n > 1)
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 基础情况直接返回
  if (n <= 1) return n

  // 使用两个变量保存前两个斐波那契数，节省空间
  let prev2 = 0 // F(0)
  let prev1 = 1 // F(1)

  // 从 F(2) 开始迭代计算到 F(n)
  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2 // F(i) = F(i-1) + F(i-2)
    prev2 = prev1 // 更新前一个数
    prev1 = current // 更新当前数
  }

  return prev1
}
