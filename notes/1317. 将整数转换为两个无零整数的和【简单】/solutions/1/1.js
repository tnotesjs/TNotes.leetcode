/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  // 检查一个数字是否包含 0
  const hasZero = (num) => num.toString().includes('0')

  // 从 1 开始尝试，找到第一个合适的分解
  for (let a = 1; a < n; a++) {
    const b = n - a
    if (!hasZero(a) && !hasZero(b)) return [a, b]
  }

  // 理论上执行到这一行，题目描述中说了保证至少有一个有效的解决方案。
  return [1, n - 1]
}

// 2025.12.30
// Accepted
// 210/210 cases passed (0 ms)
// Your runtime beats 100 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (54.4 MB)
