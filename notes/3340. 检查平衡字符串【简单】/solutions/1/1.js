/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let evenSum = 0 // 偶数下标之和
  let oddSum = 0 // 奇数下标之和

  for (let i = 0; i < num.length; i++) {
    const digit = Number(num[i])
    if (i % 2 === 0) {
      evenSum += digit
    } else {
      oddSum += digit
    }
  }

  return evenSum === oddSum
}
