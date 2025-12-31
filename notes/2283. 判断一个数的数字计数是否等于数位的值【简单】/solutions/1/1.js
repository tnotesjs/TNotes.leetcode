/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const cnt = Array(10).fill(0)
  for (let i = 0; i < num.length; i += 1) {
    cnt[num[i].charCodeAt(0) - 48] += 1 // '0' -> 48
  }

  for (let i = 0; i < num.length; i += 1) {
    if (cnt[i] !== Number(num[i])) return false
  }
  return true
}
