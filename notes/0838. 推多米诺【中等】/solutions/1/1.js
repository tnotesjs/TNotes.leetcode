/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const n = dominoes.length
  const forces = new Array(n).fill(0)
  let f = 0
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === 'R') f = n
    else if (dominoes[i] === 'L') f = 0
    else f = Math.max(f - 1, 0)
    forces[i] += f
  }
  f = 0
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === 'L') f = n
    else if (dominoes[i] === 'R') f = 0
    else f = Math.max(f - 1, 0)
    forces[i] -= f
  }
  const res = []
  for (let i = 0; i < n; i++) {
    if (forces[i] > 0) res.push('R')
    else if (forces[i] < 0) res.push('L')
    else res.push('.')
  }
  return res.join('')
}
