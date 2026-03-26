/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
  const n = stones.length
  // 第一次跳偶数石头，第二次跳奇数石头
  // 最大间距就是相邻两步的最大值
  let ans = stones[1] - stones[0]
  for (let i = 2; i < n; i++) {
    ans = Math.max(ans, stones[i] - stones[i - 2])
  }
  return ans
}
