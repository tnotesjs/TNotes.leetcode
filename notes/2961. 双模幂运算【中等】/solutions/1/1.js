var getGoodIndices = function (variables, target) {
  const res = []
  for (let i = 0; i < variables.length; i++) {
    const [a, b, c, m] = variables[i]
    if (modPow(modPow(a, b, 10), c, m) === target) res.push(i)
  }
  return res
}

function modPow(base, exp, mod) {
  let result = 1
  base %= mod
  while (exp > 0) {
    if (exp & 1) result = (result * base) % mod
    base = (base * base) % mod
    exp >>= 1
  }
  return result
}
