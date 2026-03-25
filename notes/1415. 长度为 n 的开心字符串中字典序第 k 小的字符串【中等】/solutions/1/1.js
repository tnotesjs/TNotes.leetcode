/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  // 总数 = 3 * 2^(n-1)，每个首字母对应 2^(n-1) 个
  const total = 3 * (1 << (n - 1))
  if (k > total) return ''
  k-- // 转为 0-indexed
  const res = []
  const chars = ['a', 'b', 'c']
  // 第一个字符
  const groupSize = 1 << (n - 1)
  res.push(chars[Math.floor(k / groupSize)])
  k %= groupSize
  // 后续每个位置有 2 个选择
  for (let i = 1; i < n; i++) {
    const size = 1 << (n - 1 - i)
    const idx = Math.floor(k / size)
    const prev = res[res.length - 1]
    const choices = chars.filter((c) => c !== prev)
    res.push(choices[idx])
    k %= size
  }
  return res.join('')
}
