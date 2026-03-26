/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  const m = s.length
  const res = new Array(m)
  for (let i = 0; i < m; i++) {
    let r = startPos[0],
      c = startPos[1],
      count = 0
    for (let j = i; j < m; j++) {
      if (s[j] === 'U') r--
      else if (s[j] === 'D') r++
      else if (s[j] === 'L') c--
      else c++
      if (r < 0 || r >= n || c < 0 || c >= n) break
      count++
    }
    res[i] = count
  }
  return res
}
