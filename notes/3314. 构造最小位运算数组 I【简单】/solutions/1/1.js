/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  return nums.map((num) => {
    // 2 是偶数，没有答案
    if (num === 2) return -1

    // 找到最低位 0 的位置
    let bit = 1
    while (num & bit) {
      bit <<= 1
    }

    // 把最低位 0 前面的那个 1 置为 0
    return num - (bit >> 1)
  })
}
