/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
  const n = num.length
  const half = n / 2
  let diff = 0,
    questions = 0
  for (let i = 0; i < half; i++) {
    if (num[i] === '?') questions++
    else diff += num[i] - '0'
  }
  for (let i = half; i < n; i++) {
    if (num[i] === '?') questions--
    else diff -= num[i] - '0'
  }
  // Alice 赢当且仅当 diff + questions * 4.5 !== 0
  return diff * 2 + questions * 9 !== 0
}
