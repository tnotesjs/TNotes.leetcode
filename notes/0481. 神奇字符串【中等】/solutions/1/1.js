/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  if (n === 0) return 0
  if (n <= 3) return 1
  const s = [1, 2, 2]
  let i = 2 // 指向当前组的长度
  while (s.length < n) {
    const next = s[s.length - 1] === 1 ? 2 : 1
    const count = s[i]
    for (let j = 0; j < count && s.length < n; j++) s.push(next)
    i++
  }
  let res = 0
  for (let k = 0; k < n; k++) if (s[k] === 1) res++
  return res
}
