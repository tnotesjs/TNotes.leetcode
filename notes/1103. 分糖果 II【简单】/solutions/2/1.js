/**
 * 数学整轮分配：利用前 K 次的等差数列求和与剩余 L 快速定位每人的总分配。
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const n = num_people
  const res = new Array(n).fill(0)
  // 前 K 次完整发放满足 1+2+...+K <= candies
  const K = Math.floor((Math.sqrt(1 + 8 * candies) - 1) / 2)
  const used = (K * (K + 1)) / 2
  let L = candies - used
  for (let i = 0; i < n; i++) {
    const t = Math.max(0, Math.floor((K - i + n - 1) / n)) // 第 i 人在前 K 次中收到的次数
    // i, i+n, i+2n,... 的和值：t*(i+1) + n*(t-1)*t/2（注意题目从 1 开始）
    res[i] = t * (i + 1) + (n * (t - 1) * t) / 2
  }
  if (L > 0) {
    const p = K % n
    res[p] += L
  }
  return res
}
