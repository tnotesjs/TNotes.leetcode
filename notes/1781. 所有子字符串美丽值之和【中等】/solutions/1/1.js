/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    const cnt = new Array(26).fill(0)
    for (let j = i; j < s.length; j++) {
      cnt[s.charCodeAt(j) - 97]++
      let maxF = 0,
        minF = Infinity
      for (let k = 0; k < 26; k++) {
        if (cnt[k] > 0) {
          maxF = Math.max(maxF, cnt[k])
          minF = Math.min(minF, cnt[k])
        }
      }
      ans += maxF - minF
    }
  }
  return ans
}
