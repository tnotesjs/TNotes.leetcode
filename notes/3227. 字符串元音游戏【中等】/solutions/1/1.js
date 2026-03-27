/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
  let vowelCount = 0
  for (const c of s) {
    if ('aeiou'.includes(c)) vowelCount++
  }
  // Alice 先手，取奇数个元音。只要有元音，Alice 就能赢
  return vowelCount > 0
}
