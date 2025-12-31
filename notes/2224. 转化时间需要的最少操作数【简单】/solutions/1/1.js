/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  const toMin = (t) => {
    const [h, m] = t.split(':').map(Number)
    return h * 60 + m
  }

  let diff = toMin(correct) - toMin(current)
  const steps = [60, 15, 5, 1]
  let ops = 0
  for (const step of steps) {
    ops += Math.trunc(diff / step)
    diff %= step
  }
  return ops
}
