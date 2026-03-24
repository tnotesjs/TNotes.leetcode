/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freq = new Map()
  for (const ch of s) freq.set(ch, (freq.get(ch) || 0) + 1)
  // 桶排序
  const buckets = Array.from({ length: s.length + 1 }, () => [])
  for (const [ch, cnt] of freq) buckets[cnt].push(ch)
  let res = ''
  for (let i = buckets.length - 1; i > 0; i--) {
    for (const ch of buckets[i]) res += ch.repeat(i)
  }
  return res
}
