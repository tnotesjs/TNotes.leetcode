/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  // 对角线法
  return nums.map((s, i) => (s[i] === '0' ? '1' : '0')).join('')
}
