/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const freq = Array(10).fill(0)
  for (const d of digits) freq[d] += 1

  const res = []
  const evens = [0, 2, 4, 6, 8]

  for (let h = 1; h <= 9; h += 1) {
    if (freq[h] === 0) continue
    for (let t = 0; t <= 9; t += 1) {
      if (freq[t] === 0) continue
      for (const u of evens) {
        if (freq[u] === 0) continue

        const need = Array(10).fill(0)
        need[h] += 1
        need[t] += 1
        need[u] += 1

        let ok = true
        for (let d = 0; d <= 9; d += 1) {
          if (need[d] > freq[d]) {
            ok = false
            break
          }
        }

        if (ok) res.push(100 * h + 10 * t + u)
      }
    }
  }

  return res
}
