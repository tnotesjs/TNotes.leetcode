/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function (words) {
  const n = words.length
  // dp[i][first][last] 表示前 i 个字符串连接后，首字符为 first、尾字符为 last 时的最小长度
  // 使用满射压缩：first/last 用 0-25 表示
  let dp = new Map()
  const key = (f, l) => f * 26 + l
  const f0 = words[0].charCodeAt(0) - 97
  const l0 = words[0].charCodeAt(words[0].length - 1) - 97
  dp.set(key(f0, l0), words[0].length)

  for (let i = 1; i < n; i++) {
    const ndp = new Map()
    const wf = words[i].charCodeAt(0) - 97
    const wl = words[i].charCodeAt(words[i].length - 1) - 97
    const wLen = words[i].length
    for (const [k, v] of dp) {
      const f = Math.floor(k / 26)
      const l = k % 26
      // words[i] 拼接在后面：str + words[i]
      const k1 = key(f, wl)
      const v1 = v + wLen - (l === wf ? 1 : 0)
      if (!ndp.has(k1) || ndp.get(k1) > v1) ndp.set(k1, v1)
      // words[i] 拼接在前面：words[i] + str
      const k2 = key(wf, l)
      const v2 = v + wLen - (wl === f ? 1 : 0)
      if (!ndp.has(k2) || ndp.get(k2) > v2) ndp.set(k2, v2)
    }
    dp = ndp
  }
  let res = Infinity
  for (const v of dp.values()) res = Math.min(res, v)
  return res
}
