/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0 // 跳跃次数
  let curEnd = 0 // 当前跳跃轮次能到达的最远下标
  let farthest = 0 // 遍历过程中能到达的最远下标

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i])
    if (i === curEnd) {
      // 到达当前轮次边界，必须跳一次
      jumps++
      curEnd = farthest
    }
  }

  return jumps
}
