/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let ans = 0

  for (let x = 1; x <= num; x += 1) {
    let s = 0
    let t = x
    while (t > 0) {
      s += t % 10
      t = Math.trunc(t / 10)
    }
    if (s % 2 === 0) ans += 1
  }

  return ans
}
