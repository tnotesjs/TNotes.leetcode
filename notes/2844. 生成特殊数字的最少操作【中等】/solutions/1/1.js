/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
  const n = num.length
  let ans = n
  for (const t of ['00', '25', '50', '75']) {
    let j = n - 1
    while (j >= 0 && num[j] !== t[1]) j--
    if (j < 0) continue
    let i = j - 1
    while (i >= 0 && num[i] !== t[0]) i--
    if (i < 0) continue
    ans = Math.min(ans, n - 2 - i)
  }
  if (num.includes('0')) ans = Math.min(ans, n - 1)
  return ans
}
