/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const need = { b: 0, a: 0, l: 0, o: 0, n: 0 }

  for (const ch of text) {
    if (ch in need) need[ch] += 1
  }

  need.l = Math.floor(need.l / 2)
  need.o = Math.floor(need.o / 2)

  return Math.min(need.b, need.a, need.l, need.o, need.n)
}
