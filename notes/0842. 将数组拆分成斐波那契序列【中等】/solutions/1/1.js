/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {
  const res = []
  const bt = (idx) => {
    if (idx === num.length) return res.length >= 3
    let val = 0
    for (let i = idx; i < num.length; i++) {
      val = val * 10 + (num.charCodeAt(i) - 48)
      if (val > 2147483647) break
      if (num[idx] === '0' && i > idx) break
      if (res.length >= 2) {
        const sum = res[res.length - 1] + res[res.length - 2]
        if (val < sum) continue
        if (val > sum) break
      }
      res.push(val)
      if (bt(i + 1)) return true
      res.pop()
    }
    return false
  }
  bt(0)
  return res
}
