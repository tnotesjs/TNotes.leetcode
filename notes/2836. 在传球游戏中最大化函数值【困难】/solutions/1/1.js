/**
 * @param {number[]} receiver
 * @param {number} k
 * @return {number}
 */
var getMaxFunctionValue = function(receiver, k) {
  const n = receiver.length
  const LOG = 35
  const jump = Array.from({length: LOG}, () => new Int32Array(n))
  const sm = Array.from({length: LOG}, () => new Float64Array(n))
  for (let i = 0; i < n; i++) {
    jump[0][i] = receiver[i]
    sm[0][i] = receiver[i]
  }
  for (let j = 1; j < LOG; j++) {
    for (let i = 0; i < n; i++) {
      jump[j][i] = jump[j - 1][jump[j - 1][i]]
      sm[j][i] = sm[j - 1][i] + sm[j - 1][jump[j - 1][i]]
    }
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    let cur = i, total = i, kk = k
    for (let j = 0; j < LOG && kk > 0; j++) {
      if (kk % 2 === 1) {
        total += sm[j][cur]
        cur = jump[j][cur]
      }
      kk = Math.floor(kk / 2)
    }
    if (total > ans) ans = total
  }
  return ans
}
