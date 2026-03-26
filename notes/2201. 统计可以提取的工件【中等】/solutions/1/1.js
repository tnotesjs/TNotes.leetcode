/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function (n, artifacts, dig) {
  const dug = new Set()
  for (const [r, c] of dig) {
    dug.add(r * n + c)
  }
  let count = 0
  for (const [r1, c1, r2, c2] of artifacts) {
    let allDug = true
    for (let r = r1; r <= r2 && allDug; r++) {
      for (let c = c1; c <= c2 && allDug; c++) {
        if (!dug.has(r * n + c)) allDug = false
      }
    }
    if (allDug) count++
  }
  return count
}
