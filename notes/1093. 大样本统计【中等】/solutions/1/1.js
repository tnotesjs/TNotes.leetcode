/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  let min = -1,
    max = -1,
    mode = 0,
    total = 0,
    sum = 0,
    maxFreq = 0
  for (let i = 0; i < 256; i++) {
    if (count[i] === 0) continue
    if (min === -1) min = i
    max = i
    total += count[i]
    sum += i * count[i]
    if (count[i] > maxFreq) {
      maxFreq = count[i]
      mode = i
    }
  }
  const mean = sum / total
  // find median
  let m1 = -1,
    m2 = -1
  const half1 = Math.floor((total - 1) / 2),
    half2 = Math.floor(total / 2)
  let acc = 0
  for (let i = 0; i < 256; i++) {
    acc += count[i]
    if (m1 === -1 && acc > half1) m1 = i
    if (m2 === -1 && acc > half2) m2 = i
  }
  return [min, max, mean, (m1 + m2) / 2, mode]
}
