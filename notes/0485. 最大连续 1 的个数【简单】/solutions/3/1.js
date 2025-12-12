/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // => [1, 1, 0, 1, 1, 1]
  nums.push(0) // 往 nums 的结尾推一个 0，以便后续做正则匹配，实现切片。
  const str = nums.join(''),
    reg = /(1+)(?=0+)/g
  const arr = str.match(reg) // => ['11', '111']
  return arr ? Math.max(...arr.map((item) => item.length)) : 0
}
