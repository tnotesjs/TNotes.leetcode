/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length
  const cuts = Array.from({ length: n }, (_, i) => i)

  const expand = (left, right) => {
    while (left >= 0 && right < n && s[left] === s[right]) {
      const newCut = left === 0 ? 0 : cuts[left - 1] + 1
      if (newCut < cuts[right]) cuts[right] = newCut
      left--
      right++
    }
  }

  for (let center = 0; center < n; center++) {
    expand(center, center)
    expand(center, center + 1)
  }

  return cuts[n - 1]
}
