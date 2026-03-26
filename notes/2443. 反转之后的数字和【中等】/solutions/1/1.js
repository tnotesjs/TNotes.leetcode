/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  for (let i = 0; i <= num; i++) {
    const rev = Number(String(i).split('').reverse().join(''))
    if (i + rev === num) return true
  }
  return false
}
