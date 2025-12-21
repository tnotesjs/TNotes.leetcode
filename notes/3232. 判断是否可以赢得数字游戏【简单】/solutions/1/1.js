/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let singleDigitSum = 0 // 个位数之和
  let doubleDigitSum = 0 // 两位数之和

  for (const num of nums) {
    if (num < 10) {
      singleDigitSum += num
    } else {
      doubleDigitSum += num
    }
  }

  // Alice 选个位数或两位数，只要有一方严格大于另一方即可赢
  return singleDigitSum !== doubleDigitSum
}
