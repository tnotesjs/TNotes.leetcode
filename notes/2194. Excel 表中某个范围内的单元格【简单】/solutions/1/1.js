/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const [c1, r1, , c2, r2] = s.split('')
  const res = []

  for (let c = c1.charCodeAt(0); c <= c2.charCodeAt(0); c += 1) {
    for (let r = Number(r1); r <= Number(r2); r += 1) {
      res.push(String.fromCharCode(c) + r.toString())
    }
  }

  return res
}
