/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  let arr = nums.slice() // 不修改原数组
  while (arr.length > 1) {
    const next = Array(arr.length / 2)
    for (let i = 0; i < next.length; i += 1) {
      if (i % 2 === 0) next[i] = Math.min(arr[2 * i], arr[2 * i + 1])
      else next[i] = Math.max(arr[2 * i], arr[2 * i + 1])
    }
    arr = next
  }
  return arr[0]
}
