/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function (num, k) {
  if (num === 0) return 0
  for (let cnt = 1; cnt <= 10; cnt++) {
    if (cnt * k > num) return -1
    if ((cnt * k) % 10 === num % 10) return cnt
  }
  return -1
}
